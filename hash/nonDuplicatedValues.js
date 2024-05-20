function nonDuplicate(str) {
    let strArray = [];
    let nonDuplicacte = []
    for(i=0; i<str.length; i++) {
      if(typeof strArray[str[i]] === 'undefined') {
        strArray[str[i]] = 1;
      } else {
        strArray[str[i]] += 1
      }
      
    }
    console.log(strArray.length)
    for(i=0; i<str.length; i++) {
        
      if(strArray[str[i]] == 1) {
        
        nonDuplicacte.push(str[i])
      }
    }
    return nonDuplicacte;
  }
  
  console.log("Result: ", nonDuplicate("minimum"));
