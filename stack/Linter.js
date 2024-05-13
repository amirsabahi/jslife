function linter(expression) {
    let stack = [];
    for (i = 0; i < expression.length; i++) {
      const open = ["(", "[", "{"];
      const close = [")", "]", "}"];
  
      if (open.includes(expression[i])) {
        stack.push(expression[i]);
        continue;
      }
      if (close.includes(expression[i])) {
        let p = stack.pop();
        if (expression[i] === ")" && p !== "(") return false;
        if (expression[i] === "}" && p !== "{") return false;
        if (expression[i] === "]" && p !== "[") return false;
        continue;
      }
    }
    if (stack.length > 0) return false;
  
    return true;
  }
  
  console.log(linter("(var = x= {y: [1,2]}"));
  