function range (start, end, step = start < end? 1 : -1) {
let numbersStartToEnd = [];
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            numbersStartToEnd.push(i)
    }
} else {
    for (let i = start; i <= end; i += step) {
        numbersStartToEnd.push(i)
    }
}
return numbersStartToEnd;
}


function sum(inputArray) {
    let total = 0;
    for (let value of inputArray) {
        total += value;
    }
    return total;
}

console.log(range(2,5));
console.log(range(5, 8, 3));
console.log(range(6, 3, -1));
console.log(sum(range(1, 10)));