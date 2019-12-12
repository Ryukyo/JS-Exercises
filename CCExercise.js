
/* 
//Collection of handycapped tasks by avoiding native js methods
//simple example of currying

function sum (x) {
    return function (y) {
      return x + y;
    }
  }
  
console.log(sum(3)(5));
  
  
// swap keys and values of an object
  
let user = {
    name: "John",
    "age": 30,
    isAdmin: true,
  };
  
function swap(object) {
    let newObject = {};
    if(typeof object === "object" && object !== null ) {  //optional if not guaranteed object and !null input
      for (let keys in object) {
        newObject[object[keys]] = keys; // like let value = object[keys]; newObject[value] = keys;
      } return newObject;
    } return false;                       // optional with if clause
}
  
console.log(swap(user)); //ordered by numbers (integers) first, then non enumerable keys according to creation order */



/*Declare a function 'pluck'.
'pluck' takes two inputs: an array of objects and a string (the 'key')
'pluck' returns an array of property values using the 'key'.
*/

/* let arr = [
    {name: 'doggo1', age: 14}, 
    {name: 'doggo2', age: 25},                              
    {name: 'doggo3', age: 6},
];

function pluck(array, key) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].hasOwnProperty(key)) {     // optional check
            newArray[i] = array[i][key];       // newArray.push(array[i][key])
        }
    }
    return newArray;
}
console.log(pluck(arr,'name'));

function pluck2(array, key) {
    return array.map(function(object) {
      return object[key];
    });
}
console.log(pluck2(arr,'name'))


let exampleArray = [1,2,3,4,5];

function map (array, appliedFunction) {
    let mapArray = [];
    for (let i = 0; i < array.length; i++) {
        mapArray[i] = appliedFunction(array[i], i, array);      //alternatively: .push; currently processed value(at position i), index and array optional in this case
    }
    return mapArray;
}
console.log(map(exampleArray, function (num) {return num ** 2}))    //avoiding arrow function */


// if predicate of the given value is true, the callback function with the given value is supposed to be returned, else, only the value is returned

function maybe(predicate, callback) {
  return function(value) {
    if (predicate(value) === true) {
      return callback(value);
    } 
    return value;
  } 
}

function greaterThan100(x) {
  return x > 100;
}

function addOne(x) {
  return x + 1;
}

console.log(maybe(greaterThan100,addOne)(1001))