let a = 42;
let b = 3.14;
let c = Infinity;
let d = -Infinity;
let e = NaN;
let f = 0x1F; // Hexadecimal
let g = 0o17; // Octal
let h = 0b1010; // Binary
let i = BigInt(1234567890123456789012345678901234567890n); // BigInt
let j = Number.MAX_VALUE; // Maximum value
console.log(j);
let k = Number.MIN_VALUE; // Minimum value
console.log(k);
let l = Number.POSITIVE_INFINITY; // Positive infinity
console.log(l);
let m = Number.NEGATIVE_INFINITY; // Negative infinity
console.log(m);
let n = Number.NaN; // Not a number
console.log(n);

// Validation
let o = Number.isNaN(NaN); // Check if NaN
let p = Number.isFinite(42); // Check if finite
let q = Number.isInteger(42); // Check if integer
let r = Number.parseInt("42"); // Parse integer
let s = Number.parseFloat("3.14"); // Parse float
let t = Number.isSafeInteger(9007199254740991); // Check if safe integer

// Conversion
console.log(Number("42")); // Convert string to number
console.log(parseInt("42.5")); // Convert string to integer
console.log(parseFloat("3.14")); // Convert string to float
console.log(toString(65)); // "65"
console.log((5.2762562).toFixed(2)); // "5.28"
console.log((5.2762562).toPrecision(4)); // "5.276"
console.log((5.2762562).toExponential(2)); // "5.28e+0"
console.log((5.2762562).toLocaleString("en-US")); // "5.28"

// Math Related   dont worry there is IDE suggestion for this
console.log(Math.PI); // Pi 3.14159...
console.log(Math.E); // Euler's number 2.71828...
console.log(Math.abs(-5)); // Absolute value 5
console.log(Math.floor(5.8)); // Floor value 5
console.log(Math.ceil(5.2)); // Ceiling value 6
console.log(Math.round(5.5)); // Round value 6
console.log(Math.max(1, 2, 3)); // Maximum value 3
console.log(Math.min(1, 2, 3)); // Minimum value 1
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.sqrt(16)); // Square root 4
console.log(Math.pow(2, 3)); // Power 8
console.log(Math.sin(Math.PI / 2)); // Sine value 1
console.log(Math.cos(0)); // Cosine value 1
console.log(Math.tan(Math.PI / 4)); // Tangent value 1
console.log(Math.log(10)); // Natural logarithm 2.30259...
console.log(Math.log10(100)); // Base 10 logarithm 2
console.log(Math.exp(1)); // Exponential value 2.71828...