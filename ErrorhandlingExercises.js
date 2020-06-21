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

//console.log(reliableMultiply(8, 7));


const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
 /*  
    If the box was not locked, execute the given function and leave box unlocked 
    If the box is locked, unlock it before executing the given function and lock the box again, no matter the function was successful or not
 */
  function withBoxUnlocked(body) {
    if (!box.locked) {
        return body()
    }
    box.unlock();
    try {
      return body();  
    } finally {
        box.lock();
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }