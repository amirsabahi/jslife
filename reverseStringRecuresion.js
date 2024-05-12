const array = ['a', 'b', 'c', 'd', 'e'];

function reverseString(array) {
  if(array.length == 1) return array[0]
  return reverseString(array.slice(1, array.length)) + array[0]
}

console.log(reverseString(array));
