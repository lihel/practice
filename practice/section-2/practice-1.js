function count_same_elements(collection) {
  //在这里写入代码
  var newarr=[];
  var k=0;
  for(var j=1;j<9;j++)
  newarr[j]={};
  var object = new Object();
  newarr[0]=object;
  newarr[0].key=collection[0];
  newarr[0].count=1;
  for(var i=1;i<collection.length;i++)
  {
     if(collection[i] === newarr[k].key)
    {
      newarr[k].count++;
    }
    else
    {
      k++;
      newarr[k].key=collection[i];
      newarr[k].count = 1;
    }
  }
  return newarr;
}
