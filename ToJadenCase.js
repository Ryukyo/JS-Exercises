// original attempt using only string and array
String.prototype.toJadenCase = function () {
        let strToArray = str.split(' ');
        let newArray = [];

        for (let i = 0; i < strToArray.length; i++) {
            newArray.push(strToArray[i][0].toUpperCase() + strToArray[i].slice(1));
        }
        return newArray.join(' ');
};

// using map and this within an embedded function
String.prototype.toJadenCase = function () {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return this.split(' ').map(capitalizeFirstLetter).join(' ');
};

// using map and this
String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

// using .replace
String.prototype.toJadenCase = function () {
    //...
    return this.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
};

// For testing
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(str));