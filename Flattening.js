let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten (arrays) {
    return arrays.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    }

console.log(flatten(arrays));

console.log([].concat.apply([], arrays));
console.log(arrays.reduce((combined, original) => combined.concat(original),[]));

let flattenedArray = arrays.reduce(function (flattened, toFlatten) {
    return flattened.concat(toFlatten);
}, []);
console.log(flattenedArray);