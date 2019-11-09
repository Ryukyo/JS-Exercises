/*  using rest parameters
function makeArrayConsecutive1(sequence) {
    return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
  } */


  //finding how many numbers are needed to fill the array from min to max value
function makeArrayConsecutive2(statues) {
    let smallest = Number.POSITIVE_INFINITY;
    let biggest = Number.NEGATIVE_INFINITY;

    if (statues.length == 1) return 0;

    for (let i = 0; i < statues.length; i++) {
        smallest = Math.min(smallest,statues[i]);
        biggest = Math.max(biggest, statues[i]);
    }
    return biggest + 1 - smallest - statues.length;
}

statues = [6, 2, 3, 8]

console.log(makeArrayConsecutive2(statues)); //3