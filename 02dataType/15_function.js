// 🔹 1. Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Awdhesh")); // Hello, Awdhesh
// ✅ Hoisted
// ✅ Has a name
// ✅ Best for general use

// 🔹 2. Function Expression
const greet = function(name) {
  return `Hi, ${name}`;
};
console.log(greet("Ram")); // Hi, Ram
// ✅ Stored in a variable
// ❌ Not hoisted
// 🚫 Can be anonymous

// 🔹 3. Arrow Function (ES6+)
const greet = (name) => `Hey, ${name}`;
console.log(greet("Shyam")); // Hey, Shyam
// ✅ Short & modern
// ❌ Doesn't have its own this, arguments, or super

// 🔹 4. Anonymous Function
// Function without a name, often used as callbacks:
setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);
// 🔹 5. Named Function Expression
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // 120


// 🔹 6. IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("I run instantly!");
})(); // I run instantly!


// 🔹 7. Rest Parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

// 🔹 8. Default Parameters
function greet(name = "Guest") {
  console.log(`Welcome, ${name}`);
}
greet(); // Welcome, Guest

// 🔹 9. Parameter Destructuring
function display({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
display({ name: "Awdhesh", age: 22 });

// 🔹 10. Callback Function
// Function passed as an argument:
function process(callback) {
  callback("done");
}
process((msg) => console.log(msg)); // done

// 🔹 11. Higher-Order Function
// A function that takes or returns another function:
function multiplyBy(factor) {
  return function (n) {
    return n * factor;
  };
}

const double = multiplyBy(2);
console.log(double(4)); // 8

// 🔹 12. Function Returning Function
function greet(name) {
  return function (message) {
    console.log(`${message}, ${name}`);
  };
}

greet("Awdhesh")("Good Morning"); // Good Morning, Awdhesh

// 🔹 13. Arrow vs Normal Function (with this)
const obj = {
  value: 42,
  normal() {
    console.log(this.value); // 42
  },
  arrow: () => {
    console.log(this.value); // undefined (global context)
  },
};
obj.normal();
obj.arrow();

// 🧠 Easy-to-Remember Cheat:

// Type	Keyword/Format	Notes
// Declaration	function foo() {}	Hoisted
// Expression	const foo = function() {}	Not hoisted
// Arrow Function	const foo = () => {}	No this, shorter syntax
// IIFE	(function() {})();	Executes immediately
// Callback	fn(() => {})	Used for async/event
// Higher-order	fn(() => {}) or return fn	Takes/returns a function
// Destructuring Params	function({ a }) {}	Clean object handling
// Rest Params	function(...args) {}	Gather extra args
// Default Params	function(x = 1) {}	Set defaults