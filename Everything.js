//relying on some-functionality
function every(array, test) {
    return !(array.some(element => !test(element)));
}

// using for loop
function every(array, test) {
    for (let i = 0; i < array.length; i++) { //or "let i of array"
        if (!test(array[i])) {
            return false;
        }
    } return true;
}  