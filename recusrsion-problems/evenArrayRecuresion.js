const array = [1,2,3,4,5,6];
function evenArray(array, collection =[]) {
 if(array.length == 0) return [];
  
  if(array[0] % 2 === 0 ) {
    return [array[0]].concat(evenArray(array.slice(1)))
   }
  else {
    return evenArray(array.slice(1))
  }
}

console.log(evenArray(array));
