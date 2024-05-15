function intersection(array1, array2) {
    let smallerArray = [];
    let largerArray = [];
  
    if (array1.length >= array2.length) {
      smallerArray = array2;
      largerArray = array1;
    } else {
      smallerArray = array1;
      largerArray = array2;
    }
  
    let dict = [];
    for (i = 0; i < largerArray.length; i++) {
      dict[largerArray[i]] = true;
    }
  
    let intersection = [];
    for (i = 0; i < smallerArray.length; i++) {
      if (dict[smallerArray[i]]) {
        intersection.push(smallerArray[i]);
      }
    }
    
    return intersection;
  }
  
  
  console.log(intersection([1,2,3,4,5], [2,4,6,8]))