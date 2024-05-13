function reverseString(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
      let char = stack.pop();
      reverse += char;
    }
  
    return reverse;
  }
  
  console.log(reverseString("ABC"));