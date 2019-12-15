// providing a function which checks whether a number appears more than once in an array and returns a boolean
// original solution without using "native methods"

function findEqual(sequence) {
    for (let i = 0; i < sequence.length; i++) {
        for (let j = 0; j < sequence.length; j++) {
            if ((sequence[i] == sequence[j]) && (i != j)) return true;
        }
    } return false;
}

function findEqualBonus(sequence) {
    return sequence.some(function(item) {
        return sequence.indexOf(item) !== sequence.lastIndexOf(item);
    });
}

let sequence1 = [1, 3, 2, 1], sequence2 = [1, 3, 2];

console.log(findEqual(sequence1)); //true; false for sequence2 