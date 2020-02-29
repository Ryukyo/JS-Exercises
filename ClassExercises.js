class Vec {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    
    plus (otherVector) {
        return new Vec (this.x + otherVector.x, this.y + otherVector.y);
    }

    minus (otherVector) {
        return new Vec (this.x - otherVector.x, this.y - otherVector.y);
    }
    
    get length () {
        // Calculate distance of vector from origin (0, 0)
        return Math.sqrt(this.x * this.x + this.y * this.y); 
    }
}


//console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// Vec{x: 3, y: 5}
//console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// Vec{x: -1, y: -1}
//console.log(new Vec(3, 4).length);
// 5


class Group {
    constructor() {
        this.valueGroup = [];
    };

    add(value) {
        if (!this.has(value)) {
            this.valueGroup.push(value);
        }
    };

    delete (value) {
        this.valueGroup = this.valueGroup.filter(val => val !== value);
    };

    has (value) {
        return this.valueGroup.includes(value);
    };

    static from (valueRange) {
        let group = new Group;
        for (let val of valueRange) {
            group.add(val)
        }
        return group;
    };

    [Symbol.iterator] () {
        return new GroupIterator (this);
    };
};


class GroupIterator {
    constructor (group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.valueGroup.length) {
            return {done: true}
        } else {
            let result = {
               value: this.group.valueGroup[this.position], done: false
            };
            this.position++;
            return result;
        }
    }
}

//let group = Group.from([10, 20]);
//console.log(group.has(10));
// → true
//console.log(group.has(30));
// → false
//group.add(10);
//group.delete(10);
//console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// a, b, c