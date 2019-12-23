function addBorder(picture) {
    //how long each line has to be, including the stars
    let length = picture[0].length + 2;     
    let wall = "";

    // build the wall for position 0 and last position and add them to array
    for (let i = 0; i < length; i++) {      
        wall = wall.concat("*");
    }
    picture.unshift(wall);
    picture.push(wall);

    // replace the original array elements with *originalElement*
    for (let j = 1; j < picture.length - 1; j++) {
        picture[j] = "*".concat(picture[j], "*");
    }
    return picture;
}

let picArr = 
["abc", 
"ded"];

let picArr2 =
["abcde", 
"fghij", 
"klmno", 
"pqrst", 
"uvwxy"];

let picArr3 =
["wzy**"];

console.log(addBorder(picArr)); //[ '*****', '*abc*', '*ded*', '*****' ]