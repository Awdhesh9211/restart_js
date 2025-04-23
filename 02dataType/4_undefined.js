/**
 * @description: Undefined data type in JavaScript
 * @note: Undefined is a primitive data type that represents the absence of a value or an uninitialized variable.
 */

// You declare a variable but don't assign a value.
let x; // x is undefined

// A function doesn’t return anything explicitly.
function myFunction() {
  // No return statement
}
myFunction(); // Returns undefined

// You try to access a property that doesn’t exist.
const obj = { name: "John" };
console.log(obj.age); // undefined

// NOTE: undefined is a primitive value, but typeof undefined === "undefined" → It's a primitive type in JS.
(x === undefined)  // ok
(typeof x === 'undefined')  // safest (if x might not be declared at all)
