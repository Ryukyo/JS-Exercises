function maskify(cc) {
    if (cc.length > 4) {
        let maxMinus4 = cc.substring(0, cc.length - 4);
        let last4 = cc.substring(cc.length - 4);
        let mask = maxMinus4.replace(/./g, "#");
        return (mask + last4);
    } else {
        return cc;
    }
}

// Masking all but the last four characters of any given input string
console.log(maskify("4556364607935616"));

// Alternative using slice, which is shorter but supposedly slower
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }