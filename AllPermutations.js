function permutations(string) {
    // base case is when the input string has only one character => only permutation is the string itself
    if (string.length <= 1) {
      return [string];
    }
  
    const result = [];
    for (let i = 0; i < string.length; i++) {
        // "fix" a character
      const char = string[i];
      const remainingString = string.slice(0, i) + string.slice(i + 1);
      // array of permutations of the remaining string,calculated by recursively calling the permutations function
      const innerPermutations = permutations(remainingString);

    // combine each character from the original string with each permutation of the remaining string 
      for (let j = 0; j < innerPermutations.length; j++) {
        result.push(char + innerPermutations[j]);
      }
    }
    
    // remove duplicates with Set
    return Array.from(new Set(result));
  }

  permutations('aabb')
  // Returns: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']