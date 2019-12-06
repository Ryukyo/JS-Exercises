function isLucky(n) {
    //create string array from input number and assign first and second half of array to variable
    let arr = (""+n).split(""); 
    let s1 = arr.slice(0, arr.length / 2);
    let s2 = arr.slice(arr.length / 2);
    // check if ticket number is even (only even numbers are allowed per task description)
    if (arr.length % 2 == 0) {
        let sum1 = 0;
        let sum2 = 0;
        //loop through both arrays and sum their values up, converting the strings to number by '+'
        for (let i = 0; i < s1.length; i++) {
            sum1 += +s1[i];
            sum2 += +s2[i];
        }
        return sum1 == sum2? true : false;
    } else {
        return n + ' is not a valid ticket number (uneven)'
    }
}

let ticket1 = 1230;
let ticket2 = 239017;

console.log(isLucky(ticket2))