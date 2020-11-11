/* function solution(A) {
    const digitsArr = A.toString().split('');
    let resultArr = [];
    let result;

    if ((digitsArr.length % 2) !== 0) {
        for (let i = 0, j = digitsArr.length - 1;  j > Math.floor(digitsArr.length / 2) - 1; i++, j--) {
            if (j === Math.floor(digitsArr.length / 2)) {
                resultArr.push(digitsArr[j])
            } else {
                resultArr.push(digitsArr[i])
                resultArr.push(digitsArr[j])
            }
        }
    } else {
        for (let i = 0, j = digitsArr.length - 1; i < digitsArr.length / 2; i++, j--) {
            resultArr.push(digitsArr[i])
            resultArr.push(digitsArr[j])
        }
    }
    
    result = Number(resultArr.join(''))
    return result;
} */

// console.log(solution(123456))
// 162534

// console.log(solution(130))

function solution(S) {
    let orderArr = S.split(' ')
    let result = []
    let topmostValue = -1;
    let num1, num2, sum, dif;

    for (let i = 0; i < orderArr.length; i++) {
        console.log(typeof orderArr[i])
        switch (orderArr[i]) {
            case typeof orderArr[i] === "number":
                result.push(Number(orderArr[i]));
                continue;
            case orderArr[i] === "POP":
                result.pop();
                continue;
            case orderArr[i] === "DUP":
                result.push(result[result.length - 1]);
                continue;
            case orderArr[i] === "+":
                num1 = result.pop();
                num2 = result.pop();
                sum = num1 + num2;
                result.push(sum);
                continue;
            case orderArr[i] === "-":
                num1 = result.pop();
                num2 = result.pop();
                dif = num1 - num2;
                result.push(dif);
                continue;
            default:
                continue;
        } 
    }
    topmostValue = result[result.length - 1];
    return topmostValue;
}

console.log(solution("13 DUP 4 POP 5 DUP + DUP + -"))
