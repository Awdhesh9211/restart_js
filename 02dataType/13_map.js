// 🗺️ What is a Map?
// A Map is a collection of key-value pairs where keys can be any type (including objects, functions, and primitives).

const map = new Map();
// create 
const myMap = new Map();

// Add key-value pairs
myMap.set("name", "Awdhesh");
myMap.set(1, "one");
myMap.set(true, "boolean key");

console.log(myMap.get("name")); // "Awdhesh"
console.log(myMap.size);        // 3

// 🧹 Map Methods

// Method	Use
// set(key, value)	Add or update
console.log(myMap.set("age", 22)); // Add new key-value pair
// get(key)	Get value
console.log(myMap.get("age")); // 22
// has(key)	Check if key exists
console.log(myMap.has("name")); // true
// delete(key)	Remove entry
console.log(myMap.delete("age")); // true (removes "age")
// clear()	Remove all
// myMap.clear(); // Removes all entries
// size	Count of entries
console.log(myMap.size); // 2 (after deleting "age")