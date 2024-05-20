function hasAllLetters(str) {
    let strArray = [];
    let missing = []
    for(i=0; i<str.length; i++) {
      strArray[str[i]] = true;
    }
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(i=0; i<alphabets.length; i++) {
      if(!strArray[alphabets[i]]) {
        missing.push(alphabets[i]);
      }
    }
    return missing;
  }
  
  console.log(hasAllLetters("the quick brown box jumps over a lazy dog"));