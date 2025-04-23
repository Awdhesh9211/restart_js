// 🔹 What is a Set?
// A Set is a built-in object that lets you store unique values of any type: primitives or object references.

const mySet = new Set();

// create
const set = new Set();

set.add(1);
set.add(5);
set.add(1); // duplicate, will be ignored

console.log(set); // Set { 1, 5 }
console.log(set.has(1)); // true
console.log(set.size);   // 2

// 🔧 Set Methods

// Method	Description
// add(value)	Adds a value to the set (if not present)
console.log(set.add(2)); // Set { 1, 5, 2 }
// delete(value)	Deletes a value
// console.log(set.delete(1)); // Set { 5, 2 }
// has(value)	Checks if a value exists
// console.log(set.has(1)); // false
// clear()	Empties the set
console.log(set.clear()); // Set {}
// size	Returns the number of elements
console.log(set.size); // 0