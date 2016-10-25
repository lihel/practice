function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
var c=[];
  var k=0,i=0,j=0;
  for(i=0;i<collection_a.length;i++){
    for(j=0;j<object_b.value.length;j++){
      if(collection_a[i]==object_b.value[j])
        c[k++]=collection_a[i];
    }
  }
  return c;
}


