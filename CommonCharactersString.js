/* 
// "bonus" function created on first interpretation of task
function uniqueCharacterCount(s1, s2) {
    let counter = 0;
    let values = [];

    for (let i = 0; i < s1.length; i++) {
        if (values.includes(s1[i])) continue;
            for (let j = 0; j < s2.length; j++) {
                if (s1[i] == s2[j]) {
                    counter++;
                    values.push(s2[j]);
                    break;
                }
        }
    }
    return counter;
} */


function commonCharacterCount(s1, s2) {
    let counter = 0;
    let s2arr = s2.split("");

    for (let i = 0; i < s1.length; i++) {
        if (s2arr.indexOf(s1[i]) !== -1){
            s2arr.splice(s2arr.indexOf(s1[i]),1); 
            counter++;
        } 
    }
    return counter;
}


let s1 = "aabcc";
let s2 = "adcaa";

console.log(commonCharacterCount(s1,s2));