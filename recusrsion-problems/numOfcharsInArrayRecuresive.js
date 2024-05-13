const array = ["ab", "c", "def", "ghij"];
function numberOfCharsInArray(array) {
  if (array.length == 1) return array[0].length;
  return array[0].length + numberOfCharsInArray(array.slice(1, array.length));
}

console.log(numberOfCharsInArray(array));