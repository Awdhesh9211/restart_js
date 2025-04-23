// 1. Primitive Data Types (immutable, stored by value)
// These are 7 in total:
// Data Type	Example	typeof result
// Number	let a = 42;	"number"
// String	let b = "hello";	"string"
// Boolean	let c = true;	"boolean"
// Undefined	let d;	"undefined"
// Null	let e = null;	"object" 👀 (quirk)
// Symbol	let f = Symbol("id");	"symbol"
// BigInt	let g = 123n;	"bigint"
// NaN      let h = NaN;	"number" (not a type, but a special value)


// 2. Non-Primitive (Reference) Types (mutable, stored by reference)
// Data Type	Example	typeof result
// Object	{ name: "Awdhesh" }	"object"
// Array	[1, 2, 3]	"object"
// Function	function foo() {}	"function"
// Date, RegExp	new Date(), /abc/	"object"


// 🔠 Easy Mnemonic to Remember JS Data Types:
// “NSS BUNS For All Real Developers”
// Each letter stands for a type:

// N – Null
// S – String
// S – Symbol
// B – Boolean
// U – Undefined
// N – Number
// S – BigInt
// F – Function
// A – Array
// R – RegExp
// D – Date
// other
// M - map
// S - set
// WeakMap, WeakSet
// Promise

const types = [
    42,
    "hello",
    NaN,
    true,
    undefined,
    null,
    Symbol("id"),
    123n,
    { key: "value" },
    [1, 2, 3],
    function () {},
    new Date(),
    /abc/,
    new Map(),
    new Set(),
    new WeakMap(),
    new WeakSet(),
    Promise.resolve(),
  ];
  
  types.forEach((item) => {
    if(item instanceof Date){
        console.log(item, "=>","Date but type is object");
    }else{
        console.log(item, "=>", typeof item == 'object' && item instanceof Array? "Array but type is object" : typeof item);
    }
  });
  
//  @NOTE:-  null is a primitive, but typeof null === "object" → It's a historical bug in JS.
// if (IsSmi(value)) return "number"; // internal representation of typeof
// if (IsHeapNumber(value)) return "number";
// if (IsString(value)) return "string";
// if (IsBoolean(value)) return "boolean";
// if (IsUndefined(value)) return "undefined";
// if (IsNull(value)) return "object"; // historic bug
// if (IsSymbol(value)) return "symbol";
// if (IsBigInt(value)) return "bigint";
// if (IsCallable(value)) return "function";
// return "object";

// NOTE:-  dont use NaN === NaN instead Number.isNaN() or isNaN() function
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true 
console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true
console.log(isNaN(123)); // false