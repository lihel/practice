function create_updated_collection(collection_a, object_b) {
  var newarr=[],split_arr=[];
  var k=0;
  for(var j=0;j<9;j++)
    newarr[j]={};
  newarr[0].key=collection_a[0];
  newarr[0].count=1;
  for(var i=1;i<collection_a.length;i++)
  {

    if(collection_a[i].length == 1) {
      if (collection_a[i] === newarr[k].key) {
        newarr[k].count++;
      }
      else {
        k++;
        newarr[k].key = collection_a[i];
        newarr[k].count = 1;
      }
    }
    else{
      k++;
      split_arr= collection_a[i].split("");
      newarr[k].key=split_arr[0];
      newarr[k].count=Number(split_arr[2]);
    }
  }

  for(var i=0;i<newarr.length;i++)
  {
    for(var j=0;j<object_b.value.length;j++)
    {
      if (newarr[i].key === object_b.value[j]) {
        newarr[i].count -= Math.floor(newarr[i].count/3);
      }
    }
  }
  return newarr;
}
