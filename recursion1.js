// Use recursion to traverse an array of numbers and arrays

const array = [
    1,
    2,
    3,
    [4, 5, 6],
    7,
    [8, [9, 10, 11, [12, 13, 14]]],
    [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
    33
  ];
  
  function traverseArray(array) {
    for (let item of array) {
      if (typeof item === "object") {
        traverseArray(item);
      } else {
        console.log(item);
      }
    }
  }
  
  traverseArray(array);
  
