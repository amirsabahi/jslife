const str = "xxhixx";
const arrayString = str.split("");
function countXRecursive(array) {
  if (array.length === 1)
    if (array[0] === "x" || array[0] === "X") return 1;
    else return 0;
  if (array[0] === "x" || array[0] === "X") {
    return 1 + countXRecursive(array.slice(1, array.length));
  } else {
    return countXRecursive(array.slice(1, array.length));
  }
}

console.log(countXRecursive(arrayString));
