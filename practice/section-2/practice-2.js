function count_same_elements(collection) {
  var newarr=[],split_arr=[];
  var k=0;
  for(var j=1;j<9;j++)
    newarr[j]={};
  var object = new Object();
  newarr[0]=object;
  newarr[0].key=collection[0];
  newarr[0].count=1;
  for(var i=1;i<collection.length;i++)
  {

    if(collection[i].length == 1) {
      if (collection[i] === newarr[k].key) {
        newarr[k].count++;
      }
      else {
        k++;
        newarr[k].key = collection[i];
        newarr[k].count = 1;
      }
    }
    else{
      k++;
      split_arr= collection[i].split("");
      newarr[k].key=split_arr[0];
      newarr[k].count=Number(split_arr[2]);
    }
  }
  return newarr;
}
