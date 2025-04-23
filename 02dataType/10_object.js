// 🧠 What is an Object in JS?
// A collection of key-value pairs.

// Keys are strings or symbols, values can be any data type.

const user = {
  name: "Awdhesh",
  age: 22,
  isAdmin: true
};

// create
const obj1 = {};                       // Empty object
const obj2 = new Object();            // Using constructor
const obj3 = { name: "Awdhesh" };     // With values

// accessing / modifying
obj.name            // Dot notation
obj["age"]          // Bracket notation
obj.age = 23;       // Update
obj.email = "x@y.z" // Add new property
delete obj.age;     // Delete property

// Keys – Object.keys()
// Returns an array of the object's own enumerable property names.
const keys = Object.keys(user); // ["name", "age", "isAdmin"]

// Values – Object.values()
// Returns an array of the object's own enumerable property values.
const values = Object.values(user); // ["Awdhesh", 22, true]

// Entries – Object.entries()
// Returns an array of the object's own enumerable property [key, value] pairs.
const entries = Object.entries(user); // [["name", "Awdhesh"], ["age", 22], ["isAdmin", true]]

// Seal – Object.seal()
// Prevents new properties from being added to an object, but allows existing properties to be modified.
// Sealed objects can still have their properties changed, but they cannot be added or removed.
const sealedObj = Object.seal(user); // Seals the object
// sealedObj.newProp = "new"; // Error: Cannot add new property
// sealedObj.name = "John"; // Allowed: Modifying existing property

// Clone – Object.assign({}, obj)
// Creates a shallow copy of an object.
// Note: Nested objects are still referenced, not cloned.
const clone = Object.assign({}, user); // Shallow copy of user


// Freeze – Object.freeze()
// Prevents any changes to an object, including adding, removing, or modifying properties.
// Frozen objects are immutable.
const frozenObj = Object.freeze(user); // Freezes the object
// frozenObj.name = "John"; // Error: Cannot modify frozen object


// Assign – Object.assign()
// Copies the values of all enumerable own properties from one or more source objects to a target object.
// It returns the target object.
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
const result = Object.assign(target, source1, source2); // { a: 1, b: 2, c: 3 }

// Spread – { ...obj }
// Creates a shallow copy of an object using the spread operator.
// It is similar to Object.assign but more concise.
const spreadClone = { ...user }; // Shallow copy of user
// Note: Spread operator is more readable and often preferred over Object.assign for cloning objects.

// Is – Object.is()
// Compares two values for equality, similar to strict equality (===) but with some differences.
// It treats NaN as equal to NaN and +0 as different from -0.
const isEqual = Object.is(NaN, NaN); // true
// const isEqual2 = Object.is(+0, -0); // false