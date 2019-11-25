function sumTo (number) {
    let sum = 0;
    for (let i = number; i >= 1; i--) {
      sum+= i;
    } return sum;
}
  
  //console.log(sumTo(100)); using loop
  
function sumTo2 (number) {
   // let sum = 0;
    if (number == 1) {
      return 1;
    } else {
      return number + sumTo2(number - 1);
    }
}
  
  //console.log(sumTo2(100)); using recursion
  
function sumTo3(number) {
    return number * (number + 1) / 2;
}
  
  //console.log( sumTo3(100)); using formula
  
function factorial(number) {
    if (number == 1) return 1;
    else {
      return number * factorial(number-1);
    }
}
  
  //console.log(factorial(5));

function fibonacci (number) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= number; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}
  
//console.log(fibonacci(5)); 
//console.log(fibonacci(50));

function fibonacciRecursion(number, prevVal = []) {
    if (prevVal[number] != null) return prevVal[number];
    let result;
    if (n <= 2) {
        result = 1;
    } else {
        result = fibonacciRecursion(number - 1, prevVal) + fibonacciRecursion (number - 2, prevVal);
    }
    prevVal[number] = result;
    return result;
}

//console.log(fibonacci(5)); using recursion with memoization to handle big numbers
//console.log(fibonacci(50));