/**
 * @description: BigInt data type in JavaScript
 * @note: BigInt is a primitive data type that allows you to represent whole numbers larger than 2^53 - 1, which is the maximum safe integer in JavaScript. It is useful for working with large integers that exceed the limits of the Number type.
 */

// 🧠 What is BigInt?
// BigInt is a primitive data type that lets you represent whole numbers larger than 2^53 - 1, 
// which is the maximum safe integer in JavaScript (Number.MAX_SAFE_INTEGER).

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(9007199254740991 + 1); // 9007199254740992 ✅
console.log(9007199254740991 + 2); // 9007199254740992 ❌ (wrong!)

// using n and BigInt constructor
console.log(9007199254740991n + 1n); // 9007199254740992n ✅
console.log(BigInt(9007199254740991) + BigInt(1)); // 9007199254740992n ✅

// Bigint and Number
const a = 10n;
const b = 5;

console.log(a + BigInt(b)); // ✅
console.log(a + b); // ❌ TypeError
// no floating point numbers
BigInt(10.5); // ❌ Error: Cannot convert a floating point number to BigInt


// 🔍 Use Cases
// Cryptography / blockchain numbers

// Large integer IDs (e.g., Twitter Snowflake IDs)

// Scientific computation

// Financial systems needing exact big integer math

// Backend systems dealing with large counters or datasets

// mixing with json 
const data = { id: 12345678901234567890n };
JSON.stringify(data); // ❌ TypeError: Do not know how to serialize a BigInt
JSON.stringify(data, (_, v) => typeof v === "bigint" ? v.toString() : v);
// // "{"id":"12345678901234567890"}" ✅ (convert to string)