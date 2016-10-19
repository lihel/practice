function thousands_separators(num) {
    var num1=getNum1(num);
    var numbers1=splitNum1(num1);
    var put1=addComma1(numbers1);
    var print=outPut(put1,num);
    return print;
}

function getNum1(num) {
    var nums = num.toString().split('.');
    var num1=nums[0];
    return num1;
}

function splitNum1(num1) {
    num1+='';
    var numbers1=num1.split('');
    for(var i=0;i<numbers1.length;i++){
        numbers1[i]=parseInt(numbers1[i]);
    }
    return numbers1;
}

function addComma1(numbers1) {
    var tag=0;
    var put1=[];
    var j=0;

    for(var i=numbers1.length-1;i>=0;i--){
        if(tag%3===0&&tag!=0){
            put1[j]=',';
            j++;
        }
        tag++;
        put1[j]=numbers1[i];
        j++;
    }

    return put1;
}

function outPut(put1,num) {
    var out = '';
    for (var i = put1.length - 1; i >= 0; i--) {
        out += put1[i];
    }
    var nums = num.toString().split('.');

    if (nums.length != 1) {
        out += "." + parseInt(nums[1]);
    }

    return out;
}
