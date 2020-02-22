class TownInfrastructure {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownInfrastructure {
    constructor (name, buildYear, numberOfTrees, parkArea) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }
    treeDensity() {
        let density = Math.round(this.numberOfTrees/this.parkArea);
        console.log(`The tree densitiy of ${this.name} is ${density} trees per m²`);
    }
}

class Street extends TownInfrastructure {
    constructor (name, buildYear, streetLength, size = 3) {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }
    streetClassification() {
        const classifications = new Map();
        classifications.set(1, 'tiny');
        classifications.set(2, 'small');
        classifications.set(3, 'normal');
        classifications.set(4, 'big');
        classifications.set(5, 'huge');
        console.log(`The street classication of ${this.name} is ${classifications.get(this.size)}`);
    }
}

const parks = [new Park ("Neighbourhood Park", 1978, 195, 0.5), new Park ("City Park", 1988, 520, 2.3), new Park ("Adventure Park", 2014, 1750, 8.7)];
const streets = [new Street ("Nuremburg Street", 1968, 47), new Street ("Hanauer Street", 1973, 68, 4), new Street ("Garchinger Gasse", 1993, 20, 2), 
    new Street ("Leopold Street", 2002, 120, 5)];

function calcAverage(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);

    return [sum, sum/arr.length];
}

function reportParks (p) {
    console.log("----- PARKS REPORT -----");

    const currentYear = new Date().getFullYear();
    const ages = p.map(element => currentYear - element.buildYear);
    const [totalAge, avgAge] = calcAverage(ages);
    const indexOver1000Trees = p.map(element => element.numberOfTrees).findIndex(element => element >= 1000);

    p.forEach(element => element.treeDensity());
    console.log(`${p.length} parks have an average age of ${Math.round(avgAge)} years`)
    console.log(`The ${p[indexOver1000Trees].name} has over 1000 trees`)
}

function reportStreets (s) {
    console.log("----- STREETS REPORT -----");

    const [totalLength, avgLength] = calcAverage(s.map(element => element.streetLength));
    console.log(`Our ${s.length} streets have an average length of ${Math.round(avgLength)} m and a total length of ${totalLength} m`)
    s.forEach(element => element.streetClassification());
}

reportParks(parks);
reportStreets(streets);