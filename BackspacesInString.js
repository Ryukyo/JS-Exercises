/* function cleanString(s) {
  let temp = [];
  let result = "";

  // Make use of array method for building the cleaned string
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      temp.push(s[i]);
    } else if (temp.length !== 0) {
      temp.pop();
    }
  }
  // Turn array to string while emptying the temporary array (not resource efficient)
  while (temp.length > 0) {
    result += temp[0];
    temp.shift();
  }

  return result;
} */

function cleanString(s) {
  let result = [];

  // Make use of array method for building the cleaned string
  for (const c of s) {
    if (c !== "#") {
      result.push(c);
    } else if (result.length !== 0) {
      result.pop();
    }
  }
  return result.join("");
}

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc####d##c#"));
