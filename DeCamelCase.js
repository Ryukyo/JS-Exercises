function solution(string) {
  let deCamelizedString = "";

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (character === character.toUpperCase()) {
      deCamelizedString = deCamelizedString + " " + string.charAt(i);
    } else {
      i == 0
        ? (deCamelizedString += string.charAt(i).toLowerCase())
        : (deCamelizedString += string.charAt(i));
    }
  }
  return deCamelizedString;
}

/*
With regex

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

*/

/* 
With array
function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  } 
  
*/

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
