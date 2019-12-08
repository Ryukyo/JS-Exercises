// return the index + 1 of the only even/odd number of an input string for an imaginary "IQ test"

function iqTest(numbers){
  numbers = numbers.split(" ");
  let trackerEven = [];
  let trackerOdd = [];
  
// check if there are more odd or even characters in input string -> irregularity must be the only odd or only even character 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
    trackerEven.push(numbers[i])
    } else { 
      trackerOdd.push(numbers[i])
    }
  }
//array index +1 of the array with only one entry represents the solution to tick in the IQ test  
  return trackerOdd.length == 1? (numbers.indexOf(trackerOdd[0]) + 1) : (numbers.indexOf(trackerEven[0]) + 1);
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));