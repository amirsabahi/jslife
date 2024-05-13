function indexOfX(string) {
    
if(string[0] == 'x') {
    return 0
} else 
    return indexOfX(string.slice(1, string.length))+1

}

console.log(indexOfX("abghgfdfgdgfdfgdfgdfgdx"))