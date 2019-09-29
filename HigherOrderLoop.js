function loop (startValue, testFunction, updateFunction, bodyFunction) {
    for (let value = startValue; testFunction (value); value = updateFunction(value)) {
        bodyFunction(value);
    }
}