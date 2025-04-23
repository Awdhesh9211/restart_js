// 🧠 What is an Array?
// A list-like object used to store multiple values in a single variable.

// Elements can be different data types.

const arr = [1, "hello", true, null];

// create an array
const a = [];                    // Empty array
const b = [1, 2, 3];             // Number array
const c = new Array(5);          // Array with length 5 (empty)
const d = Array.of(10, 20, 30);  // Creates array from args
const e = Array.from("hello");   // Creates array from iterable (string)

// 🧠 Memory Trick: CRUD FJ SMAP RFS
// Create → push, unshift
console.log([1, 2, 3].push(4)); // [1, 2, 3, 4]
console.log([1, 2, 3].unshift(0)); // [0, 1, 2, 3]

// Read → find, includes
console.log([1, 2, 3].find((x) => x > 2)); // 3
console.log([1, 2, 3].includes(2)); // true

// Update → map, fill
console.log([1, 2, 3].map((x) => x * 2)); // [2, 4, 6]
console.log([1, 2, 3].fill(0)); // [0, 0, 0]

// Delete → pop, splice , shift
console.log([1, 2, 3].shift()); // 1
console.log([1, 2, 3].pop()); // 3
console.log([1, 2, 3].splice(1, 1)); // [2]

// Filter → filter
console.log([1, 2, 3].filter((x) => x > 1)); // [2, 3]

// Join → join, toString
console.log([1, 2, 3].join("-")); // "1-2-3"
console.log([1, 2, 3].toString()); // "1,2,3"

// Sort → sort, reverse
console.log([3, 1, 2].sort()); // [1, 2, 3]
console.log([3, 1, 2].sort(a,b=>a-b)); // [1, 2, 3]
console.log([3, 1, 2].sort((a, b) => b - a)); // [3, 2, 1]
console.log([3, 1, 2].reverse()); // [2, 1, 3]

// Merge → concat, spread
console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4]
console.log([1, 2, ...[3, 4]]); // [1, 2, 3, 4]

// Array Check → isArray
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false
console.log(Array.isArray({})); // false

// Portion → slice
console.log([1, 2, 3].slice(1)); // [2, 3]
console.log([1, 2, 3].slice(1, 2)); // [2]

// Reduce → reduce
console.log([1, 2, 3].reduce((acc, x) => acc + x, 0)); // 6

// Flatten → flat
console.log([1, [2, 3]].flat()); // [1, 2, 3]

// Spread → ...
console.log([1, 2, 3, ...[4, 5]]); // [1, 2, 3, 4, 5]
console.log([..."hello"]); // ["h", "e", "l", "l", "o"]