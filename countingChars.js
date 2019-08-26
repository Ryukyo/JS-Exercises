function countBs (string) {
    return countChar(string,"B")
}

function countChar(word, char) {
    let countChar = 0;
    for (let stringPosition = 0; stringPosition <= word.length-1; stringPosition++) {
        if (word[stringPosition] == char) {
            countChar++;
        }
    } return countChar;
}