class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

// Try calling the function. Try again as long as the error instead of the multiplication occurs, stop if a "serious" error or the result come up
function reliableMultiply(a, b) {
    while (true) {
        try {
            return primitiveMultiply(a, b)
        } 
        catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)) {
                throw error;
            }
        }
    }
}

console.log(reliableMultiply(8, 7));