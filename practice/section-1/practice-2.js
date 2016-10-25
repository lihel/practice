function collect_same_elements(collection_a, collection_b) {
  var k=0,i=0,j=0;
  var d=[];
  for(i=0;i<collection_a.length;i++){
    for(j=0;j<collection_b[0].length;j++)
    {
      if (collection_a[i] === collection_b[0][j])
        d[k++] = collection_a[i];
    }
  }
  return d;
}
