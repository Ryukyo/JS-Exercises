function reverseInParentheses(inputString) {
    if (inputString.includes('(')){
        return reverseInParentheses(reverse(inputString));  //recursive function call as long as an opening bracket is found
    } 
    return inputString
}

function reverse(inputString) {
    let regex = /\(([^()]*)\)/i; //case insensitive matches of the "words" within brackets
    let subString = regex.exec(inputString)[1];  //exec executes a search and returns an array

    subString = subString.split("").reverse().join("");
    return inputString.replace(regex, subString);
}

console.log(reverseInParentheses("foo(bar)baz(blim)"))  //foorabbazmilb
console.log(reverseInParentheses("foo(bar(baz))blim")) //foobazrabblim