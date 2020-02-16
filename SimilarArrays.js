// Exercise to find arrays that are similar. Similar requires arrays being the same with only swappping 2 or 0 elements
function areSimilar(a, b) {
    let c = [], d = [];
    // Check whether arrays are the same initially
    if (a.toString() === b.toString()) return true;

    // Build arrays with the elements that differ between the input arrays
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    /* If reversing one of the built array makes them the same, the input arrays are similar; 
    Check for number of elements differing == 2? Else more than 1 swap necessary => not similar*/
    return c.reverse().toString() === d.toString() ? true : false;
}