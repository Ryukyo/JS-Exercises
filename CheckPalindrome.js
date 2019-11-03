function checkPalindrome(inputString) {
    let length = inputString.length;
    for (let i = 0; i < length/2; i++) {
        if (inputString[i] != (inputString[length - 1 - i])) {
            return false;
        }
    } return true;
  }

/* shorter with methods
  function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
} */
  console.log(checkPalindrome("aabaa"));