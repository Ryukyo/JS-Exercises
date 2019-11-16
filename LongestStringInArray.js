function allLongestStrings(inputArray) {
    let longest = inputArray[0].length;

    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length > longest) {
            longest = inputArray[i].length;
        }
    }
    return inputArray.filter(function(element) {
        return element.length === longest});
}

let inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(inputArray)); //= ["aba", "vcd", "aba"];