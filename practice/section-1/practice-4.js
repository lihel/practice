function collect_same_elements(collection_a, object_b) {
  var k = 0;
  var j = 0;
  var newArray = [];
  for (var i = 0; i < collection_a.length; i++) {
    for (j = 0; j < object_b.value.length; j++) {
      if (collection_a[i].key === object_b.value[j])
        newArray.push(collection_a[i].key);
    }
  }
  return newArray;
}

