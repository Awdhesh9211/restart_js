// 🧠 What is NaN?
// NaN stands for "Not-a-Number".

// It's a special value in JavaScript that represents a value that is not a legal number, but still of type number
console.log(typeof NaN); // "number"

console.log(0 / 0);              // NaN
console.log(Math.sqrt(-1));      // NaN
console.log(parseInt("hello"));  // NaN
console.log(undefined + 5);      // NaN
console.log("abc" - 2);          // NaN
