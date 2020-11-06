function solution(roman){
    const conversion = {"I": 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000};
    const array = roman.split('');
    let result = 0, current, currentValue, next, nextValue;

    for (let i = 0; i < array.length; i++) {
        current = array[i]
        currentValue = conversion[current];

        next = array[i + 1]
        nextValue = conversion[next];

        // E.g. I (1) < V (5)
        if (currentValue < nextValue) result -= (currentValue);
        else result += (currentValue);
    }
    return result;
  }

  console.log(solution('XXI'));