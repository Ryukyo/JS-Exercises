function matrixElementsSum(matrix) {
    let totalPrice = 0;
    let excluded = [];

    for (let i = 0; i <  matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // if a column contains 0 all values below are "banned", therefore the column number is put on a banned list
            if (matrix[i][j] === 0) {
                excluded.push(j); //alternatively use break, then no use of separate array necessary
            }
            // check if the column is banned, if not add value to total
            else if(!excluded.includes(j)){
                totalPrice += matrix[i][j];
            }
        }
    }
    return totalPrice;
}

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]

console.log(matrixElementsSum(matrix));