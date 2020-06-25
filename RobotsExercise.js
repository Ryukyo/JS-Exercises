
const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
        graph[from] = [to];
        } else {
        graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

let mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}
  

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
}

function optimizedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {route: findRoute(roadGraph, place, parcel.place),
                pickUp: true};
      } else {
        return {route: findRoute(roadGraph, place, parcel.address),
                pickUp: false};
      } 
  });

  // Generate a score to determine which route to choose. Shorter routes are preferred (by subtracting route.length from the score).
  // Routes where a package can be picked up receive bonus points
  function precedenceScore({route, pickUp}) {
    return (pickUp ? 0.5 : 0) - route.length;
  }
    route = routes.reduce((a, b) => precedenceScore(a) > precedenceScore(b) ? a : b).route;
  }
  return {direction: route[0], memory: route.slice(1)};
}

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

function runRobot(state, robot, memory) {
    for (let steps = 0;; steps++) {
      if (state.parcels.length == 0) return steps;
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory; 
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let totalStepsRobot1 = 0, totalStepsRobot2 = 0;
    for (let sampleCalculations = 0; sampleCalculations < 100; sampleCalculations++) {
        let state = VillageState.random();
        totalStepsRobot1 += runRobot(state, robot1, memory1);
        totalStepsRobot2 += runRobot(state, robot2, memory2);
    }
    console.log(`Robot 1 took an average of ${totalStepsRobot1 / 100} steps per task`);
    console.log(`Robot 2 took an average of ${totalStepsRobot2 / 100} steps per task`);
}
  
compareRobots(optimizedRobot, [], goalOrientedRobot, []);

class PGroup {
  constructor(items) {
    this.items = items;
  }
  // Add the value to the map or if the value is already in the map, return the map as it is
  add (newValue) {
    if (this.has(newValue)) return this;
    return new PGroup(this.items.concat([newValue]));
  }
  // Return a map without the value to delete or if the value is not existent, return the map as it is
  delete (oldValue) {
    if (!this.has(oldValue)) return this;
    return new PGroup(this.items.filter(val => val !== oldValue));
  }
  // Evaluate if the value is already existing in the map of items
  has (currentValue) {
    return this.items.includes(currentValue)
  }
}

PGroup.empty = new PGroup([]);
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false

