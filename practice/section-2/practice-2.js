function count_same_elements(collection) {
 	var temp=collection[0];
	var newarray=[{key:temp,count:1}];
	var j=0;
	for(var i=1;i<collection.length;i++){
		if(collection[i].length===1){
			if(collection[i]===temp){
				newarray[j].count++;
			}
			else {
				temp=collection[i];
				j++;
				newarray.push({key:temp,count:1});
			}
		}
		else {
			var element=collection[i].split("-");
			var num=parseInt(element[1]);
			newarray.push({key:element[0],count:num});
			j++;
		}
	}
    
	return newarray;
}