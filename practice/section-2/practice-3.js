function count_same_elements(collection) {
  var newarr=[],split_arr1=[],split_arr2=[];
  var k=0;
  for(var j=0;j<9;j++)
    newarr[j]={};
  newarr[0].name=collection[0];
  newarr[0].summary=1;
  for(var i=1;i<collection.length;i++)
  {
    if(collection[i].length == 1) {
      if (collection[i] === newarr[k].name) {
        newarr[k].summary++;
      }
      else {
        k++;
        newarr[k].name = collection[i];
        newarr[k].summary = 1;
      }
    }

    else if(collection[i].length==3){
      split_arr1 = collection[i].split("");
      if (collection[i-1] === split_arr1[0]) {
      newarr[k].name = split_arr1[0];
      newarr[k].summary += Number(split_arr1[2]);
      }

     else{
        k++;
        newarr[k].name = split_arr1[0];
        newarr[k].summary = Number(split_arr1[2]);
      }
    }

    else{
      split_arr1=collection[i].split("[");
      split_arr2=split_arr1[1].split("]");
      newarr[k].name=split_arr1[0];
      newarr[k].summary+=Number(split_arr2[0]);
    }
  }
  return newarr;
}
