// Original solution
/* function solution(str) {
  let splitStrings = [];
  let duo = [];
  for (let i = 0; i < str.length; i++) {
    duo.push(str[i]);
    if (duo.length === 2) {
      let pair = duo.join("");
      splitStrings.push(pair);
      duo = [];
    }

    if (i === str.length - 1 && duo.length === 1) {
      duo.push("_");
      let pair = duo.join("");
      splitStrings.push(pair);
    }
  }
  return splitStrings;
} */

// Simplified solution
function solution(str) {
  let i = 0;
  let result = [];
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return result;
}

console.log(solution("abc")); // should return ['ab', 'c_']
console.log(solution("abcdef")); // should return ['ab', 'cd', 'ef']
