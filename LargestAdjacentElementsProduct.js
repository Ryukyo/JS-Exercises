// assuming input array with at least 2 elements

function adjacentElementsProduct(inputArray) {
    let product = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length; i++) {
        if ((inputArray[i] * inputArray[i+1]) > product) {
            product = inputArray[i] * inputArray[i+1];
        }
    } return product;
}
let inputArray = [3, 6, -2, -5, 7, 3];

console.log(adjacentElementsProduct(inputArray)) //7*3=21