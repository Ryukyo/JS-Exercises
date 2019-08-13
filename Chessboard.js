let boardSize = 8;
let board = "";

for (let line = 1; line <= boardSize; line++) {
    for (let characterNumber = 1; characterNumber <= boardSize; characterNumber++) {
        if ((line+characterNumber) % 2 == 0) {
            board += " ";
        }
        else {
            board += "#"
        }
    }
    board += "\n";
        
}
console.log(board);

