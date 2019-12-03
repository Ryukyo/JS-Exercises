function commonCharacterCount(s1, s2) {
    let counter = 0;
    let s2arr = s2.split("");
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
                counter++;
                s2arr.splice(i,1);
            }
        }
    }
    return counter;
}