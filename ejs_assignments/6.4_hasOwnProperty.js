let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map.hasOwnProperty(one));
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
console.log("one" in map)
// → true