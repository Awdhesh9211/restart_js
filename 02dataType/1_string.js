/*
 *@String - PRIMITIVE DATA TYPE | IMMUTABLE | indexing for 0
 a string is a primitive data type used to represent text. It's a sequence of characters enclosed
 */

//  1.Way of declaration
let str1 = 'Hello'; //single quotes
let str2 = "World"; //double quotes
let str3 = `Hello, ${str2}`; //template literals

// 2.Accessing string
console.log(str1); // Hello
console.log(str2[0]); // W


const str = "  Hello JavaScript World!  ";
const numStr = "123";

console.log("ORIGINAL:", str);

// 🧼 Trimming
console.log("trim():", str.trim());                  // Remove spaces both ends
console.log("trimStart():", str.trimStart());
console.log("trimEnd():", str.trimEnd());

// 🔠 Case Conversion
console.log("toUpperCase():", str.toUpperCase());
console.log("toLowerCase():", str.toLowerCase());

// ✂️ Slice & Sub
console.log("slice(2, 7):", str.slice(2, 7));         // From index 2 to 6
console.log("substring(2, 7):", str.substring(2, 7));
console.log("charAt(1):", str.charAt(1));             // Character at position
console.log("charCodeAt(1):", str.charCodeAt(1));     // Unicode of character

// 🔍 Search
console.log("includes('Java'):", str.includes('Java'));
console.log("startsWith('  He'):", str.startsWith('  He'));
console.log("endsWith('!  '):", str.endsWith('!  '));
console.log("indexOf('Java'):", str.indexOf('Java'));
console.log("lastIndexOf('l'):", str.lastIndexOf('l'));

// 🔄 Replace
console.log("replace('World', 'Universe'):", str.replace('World', 'Universe'));
console.log("replaceAll('l', 'L'):", str.replaceAll('l', 'L'));

// 📏 Length & Repeat
console.log("length:", str.length);
console.log("repeat(2):", "Hi! ".repeat(2));

// ➕ Concatenation
console.log("concat():", "Hello".concat(" ", "World"));
console.log("+ operator:", "Hello" + " " + "Again");

// 🎲 Pad
console.log("padStart(5, '0'):", numStr.padStart(5, '0'));  // "00123"
console.log("padEnd(5, '0'):", numStr.padEnd(5, '0'));      // "12300"

// 🧨 Split & Join
const words = str.trim().split(" ");
console.log("split(' '):", words);
console.log("join('-'):", words.join('-'));

// 🎯 at() (ES2022)
console.log("at(-1):", str.at(-1));     // Last character
