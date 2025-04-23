/**
 * @description: Boolean data type in JavaScript
 * @note: Boolean is a primitive data type that can have only two values: true or false.
 * * @example:
 * let isTrue = true; // Boolean value
 * let isFalse = false; // Boolean value
 */

// 1.TRUTHY and FALSY values
// Falsy Values                          	Truthy Values
// false	                                true
// 0, -0	                                Any non-zero number
// "", '', `` (empty)	                    Non-empty strings
// null, undefined	                        Any object or array
// NaN	                                    [], {}

// 2.Operations
// ! , && , || , ? :, ??

//  >> short sircuit evaluation
const val=false && "hi" //hi
const val1=true || "hi" //true

// >> conditonal rendering
const isOnline = true;
if (isOnline) {
    console.log("You're connected");
} else {
    console.log("You're offline");
}
// or
isOnline ? console.log("You're connected") : console.log("You're offline");
// >> toggle 
let isActive = false;
isActive = !isActive; // true
console.log(isActive); // true
// EXAMPLE
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean([1, 2, 3])); // true
console.log(Boolean(function() {})); // true
console.log(Boolean(new Date())); // true
console.log(Boolean(Symbol())); // true
console.log(Boolean(BigInt(0))); // false
console.log(Boolean(BigInt(1))); // true
console.log(Boolean(BigInt(-1))); // true
console.log(Boolean(BigInt(12345678901234567890))); // true
console.log(Boolean(BigInt(0n))); // false
console.log(Boolean(BigInt(1n))); // true
console.log(Boolean(BigInt(-1n))); // true  
console.log(Boolean(BigInt(12345678901234567890n))); // true