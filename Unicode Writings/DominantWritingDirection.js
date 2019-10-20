const SCRIPTS = require('./Scripts')

function dominantDirection(text) {
    let countedDirections = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (countedDirections.length == 0) return "Empty input";

    return countedDirections.reduce((a,b) => a.count > b.count ? a : b).name;
  }

  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  console.log(dominantDirection("Heya　見てください, مساء الخير!"));