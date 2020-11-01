const example = "rrryyyrryyyrr"
// Modified leaves would look like "rrryyyyyyyyrr".

function countNumberOfChanges(leaves) {
    let numberOfReplacements = 0;
    let countConsecutiveStart = 0;
    let countConsecutiveEnd = leaves.length - 1;
    let countR = 0;
    let countY = 0;

    // Check if first and last character equal 'r', increase counter if not, also ensuring one 'r' exists on both ends
    if (leaves[0] === 'y') {
        numberOfReplacements += 1;
    }
    if (leaves[leaves.length - 1] === 'y') {
        numberOfReplacements += 1;
    }

    // Count the consecutive 'r' from the beginning of the string and stop when the series ends
    // 0 element has to be 'r' in the modified leaves, so start from element 1
    for (let i = 1; i < leaves.length; i++) {
        countConsecutiveStart++;
        if (leaves[i] !== 'r') {
            break;
        }
    }

    // Count the consecutive 'r' from the end of the string and stop when the series ends
    // Last index has to be 'r', so start from last index - 1
    for (let i = leaves.length - 2; i > 0; i--) {
        countConsecutiveEnd--;
        if (leaves[i] !== 'r') {
            break;
        }
    }

    // Between the index of the beginning and ending blocks of 'r', count all occurrences of 'r' and 'y'
    for (let i = countConsecutiveStart; i < countConsecutiveEnd; i++) {
           if (leaves[i] === 'y') {
            countY ++;
        } else {
            countR++;
        }
    }

    // If there are more 'r' than 'y', increase replacement counter if an 'y' is found
    // Else increase replacement counter if an 'r' is found
    if (countR > countY) {
        for (let i = countConsecutiveStart; i < countConsecutiveEnd; i++) {
            if (leaves[i] === 'y') {
                numberOfReplacements++;
            }
        }  
    } else {
        for (let i = countConsecutiveStart; i < countConsecutiveEnd; i++) {
            if (leaves[i] === 'r') {
                numberOfReplacements ++;
            }
        }
    }

    if (!leaves.includes('y')) {
        numberOfReplacements++;
        // console.log("String contained no y")
    }

    // console.log(countConsecutiveStart)
    // console.log(countConsecutiveEnd)
    console.log(numberOfReplacements)
}

countNumberOfChanges(example);
