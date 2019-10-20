function calculateYears(principal, interest, tax, desired) {
    let yearCounter = 0;
    while (principal < desired) {
        principal += (principal * interest) * (1-tax);
        yearCounter++;
    }
    return yearCounter;
}

console.log(calculateYears(1000,0.05,0.18,1100))