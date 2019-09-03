function highAndLow(numbers){
  var splitted = numbers.split(" ");
  let lowest = Math.min(...splitted);
  let highest = Math.max(...splitted);
  return highest + " " + lowest;
}