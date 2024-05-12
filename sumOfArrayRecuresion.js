const array = [1, 2, 3, 4, 5];

function arraySum(array) {
  if (array.length == 1) return array[0];
  console.log(array);
  return array[0] + arraySum(array.slice(1, array.length));
}

console.log(arraySum(array));