function camelize (str) {
return str
.split(/[-|.]/)
// uppercase first letter of all words except for the first word
.map(function(word,index) {
return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
})
.join('');
}
  
console.log(camelize("-webkit-transition"));
console.log(camelize("background.color"));
  

function filterRange(arr, a, b) {
    let filtered = arr.filter(function(item) {
      return (item >= a && item <= b)
    });
    return filtered;
  }
  

let arr = [5, 3, 8, 1];
  
let filtered = filterRange(arr, 1, 4);
  
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)
  


function filterRangeInPlace (arr2, x, y) {
    for (let i = 0; i < arr2.length; i++) {
      let value = arr2[i];

      if (value < x || value > y) {
        arr2.splice(i,1);
      }
    }
}
  
let arr2 = [5, 3, 8, 1];
  
filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
  
console.log( arr2 ); // [3, 1]