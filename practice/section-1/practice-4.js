function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
var newArray =[];
for(var i=0;i<collection_a.length;i++){
	if (isExist(collection_a[i].key,collection_b["value"])){
			newArray.push(collection_a[i].key);
	}
}
	return newArray;
}
	function isExist(element ,collection){
        for(var i=0;i<collection.length;i++){
	        if(collection[i]===element){
	    	return true;
	        }
	    }
	return false;
    }


