const isPP = function (n) {
  let base = 2,
    exponent,
    max = Math.floor(n / 2);

  // Brute force solution trying all combinations of b^e if they resolve to n, until max is reached
  while (base <= max) {
    exponent = 2;
    while (Math.pow(base, exponent) <= n) {
      if (n === Math.pow(base, exponent)) {
        return [base, exponent];
      } else {
        exponent += 1;
      }
    }
    base += 1;
  }
  return null;
};

console.log(isPP(4));
console.log(isPP(9));
console.log(isPP(5));
