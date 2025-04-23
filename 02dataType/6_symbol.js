/**
 * @description: Symbol data type in JavaScript
 * @note: Symbol is a primitive data type introduced in ES6 that represents a unique and immutable value. Symbols are often used as object property keys to avoid name clashes.
 */

const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // false ✅
console.log(typeof sym1); // "symbol" ✅

// 🤔 Why Use Symbols?
// Create unique object keys (to avoid name conflicts).
// Add hidden or private-like properties to objects.
// Define custom behavior for built-in operations (via well-known symbols).

// 1.without description
const id = Symbol();
// 2.with description
const idWithDesc = Symbol("id");
console.log(idWithDesc); // Symbol(id) ✅
console.log(idWithDesc.description); // "id" ✅

// 3.as a object key
const user = {};
const uid = Symbol("id");
user[uid] = 123;
console.log(user[uid]); // 123
console.log(user); // 123
// console.log(Object.keys(user)); // [] ❌ (symbol keys are not enumerable)
