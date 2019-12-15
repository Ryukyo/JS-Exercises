/* let user = {
    name: "John Smith",
    age: 35
  };

  let jsonAndBack = JSON.parse(JSON.stringify(user));
  
  console.log(jsonAndBack); */


  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (value == meetup && key != "")? undefined : value;           //key != "" because value of first entry is meetup and needs to be outpout (the object)
  }));