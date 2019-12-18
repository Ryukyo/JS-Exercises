//input array represents the bodyweight of team members who are voted in teams; expected output: total bodyweight of each of the 2 teams

function alternatingSums(weights) {
    let team1 = [0];
    let team2 = [0];
    let sum = [];

    for (let i = 0; i < weights.length; i += 2) {
        team1.push(weights[i]);
    }
    for (let j = 1; j < weights.length; j += 2) {
        team2.push(weights[j]);
    }

    sum[0] = team1.reduce((a,b) => a + b);
    sum[1] = team2.reduce((a,b) => a + b);

    return sum;
}

//different approach to get every second element of input array and avoids using native methods (i.e. reduce) and 3rd variable
function alternatingSums2(weights) {
    let team1 = 0;
    let team2 = 0;
    
    for (let i = 0; i < weights.length; i++) {
        if (i % 2 == 0) {
            team1 += weights[i];
        } else {
            team2 += weights[i];
        }
    }
    
    return [team1, team2];
}


let bodyweight = [50, 60, 60, 45, 70];
console.log(alternatingSums(bodyweight));  //[ 180, 105 ]