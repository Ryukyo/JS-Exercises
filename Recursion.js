function isEven(numberToCheck) {
   while (numberToCheck >= 0) { 
    if (numberToCheck == 0) {
      return true;
    } else if (numberToCheck == 1) {
      return false;
    }
    else {
        return isEven(numberToCheck - 2);
      }
    }
  }