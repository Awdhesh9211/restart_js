// 1. What is an Error?
// An Error is an object that represents a problem that occurs during the execution of code.

// 2. Types of Errors in JavaScript

// Error Type	Meaning	Example
// 1.SyntaxError	Wrong code syntax	Missing bracket, wrong keyword
// Missing closing bracket
// Uncaught SyntaxError: Unexpected end of input
// function sayHello() {
//     console.log("Hello"
//   }
//corrected code
function sayHello() {
    console.log("Hello");
  }


// 2.ReferenceError	Using undefined variable	console.log(x); (if x not declared)
// Uncaught ReferenceError: notDeclared is not defined
// console.log(notDeclared);
// corrected code
let notDeclared = 5;
console.log(notDeclared);


// 3.TypeError	Wrong type usage	Calling non-function as function
// Uncaught TypeError: 5 is not a function
// let num2 = 5;
// num2(); // Trying to call number as a function
// corrected code
function num() {
    console.log(5);
  }
  num();
  

// 4.RangeError	Value out of allowed range	Too big number in array.length
// Uncaught RangeError: Invalid array length
// let arr = new Array(-1);
// corrected code
let arr = new Array(10);
console.log(arr.length); // 10
// function recurse() {
//     recurse();
//   }
//   recurse(); 
// Uncaught RangeError: Maximum call stack size exceeded
  

// 5.EvalError	Error in eval() function (rare)	Malformed eval usage
// Not common anymore, modern JavaScript rarely causes EvalError manually.
try {
    throw new EvalError("Custom Eval error");
  } catch (e) {
    console.error(e.name + ": " + e.message);
  }
  

// 6.URIError	Wrong encodeURI/decodeURI usage
// Uncaught URIError: URI malformed
// decodeURI('%');
// corrected code
console.log(decodeURI('https%20space'));


