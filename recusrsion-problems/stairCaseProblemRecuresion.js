function numberOfpaths(n) {
    if (n < 0) return 0;
    if (n == 0 || n == 1) return 1;
    return numberOfpaths(n - 1) + numberOfpaths(n - 2) + numberOfpaths(n - 3);
  }
  
  console.log(numberOfpaths(4));
  