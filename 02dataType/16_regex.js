// 🔹 What is RegEx?
// A RegEx is a sequence of characters that forms a search pattern—used to match, search, or replace strings.

// In JavaScript, RegEx can be:

const pattern = /abc/; // literal notation
const pattern2 = new RegExp("abc"); // constructor
// 🔹 RegEx Methods
// 🧠 String Methods using RegEx:

"hello".match(/h/);         // Match pattern
"hello".replace(/e/, "E");  // Replace match
"test".search(/t/);         // Index of match
"123".split(/\d/);          // Split on digit
// 🧪 RegEx Methods:
const regex = /a/;
regex.test("apple");       // true
regex.exec("apple");       // ['a']
// 🔹 Basic Syntax

// Syntax	Meaning	Example	Matches
// .	Any character except newline	/a.c/	abc, a7c
// ^	Start of string	/^a/	apple
// $	End of string	/e$/	apple
// *	0 or more	/lo*/	lo, loo, looo
// +	1 or more	/lo+/	lo, loo
// ?	0 or 1	/lo?/	l, lo
// {n}	Exactly n times	/a{2}/	aa
// {n,}	At least n times	/a{2,}/	aaaa
// {n,m}	Between n and m times	/a{2,4}/	aa, aaa, aaaa


// 🔹 Character Classes

// Syntax	Meaning	Example	Matches
// [abc]	a, b, or c	/[aeiou]/	vowels
// [^abc]	NOT a, b, or c	/[^0-9]/	non-digits
// [a-z]	any lowercase letter	/[a-z]/	a–z
// [A-Z]	uppercase	/[A-Z]/	A–Z
// [0-9]	digit	/[0-9]/	0–9
// 🔹 Metacharacters (Shortcuts)

// Syntax	Meaning	Matches
// \d	Digit (0–9)	0–9
// \D	Not a digit	a, b, !
// \w	Word (a-zA-Z0–9_)	variable names
// \W	Non-word character	#, %, space
// \s	Whitespace	space, tab, \n
// \S	Non-whitespace	a, 1, !
// \b	Word boundary	start/end word
// \B	Non-word boundary	inside a word
// 🔹 Flags

// Flag	Meaning	Example
// g	Global (all matches)	/a/g
// i	Ignore case	/a/i
// m	Multiline	/^a/m
// 🔹 Example Patterns
// js
// Copy
// Edit
// /\d{3}-\d{3}-\d{4}/      // US phone number: 123-456-7890
// /[a-z0-9._]+@[a-z]+\.(com|in)/i  // Email
// /^\s*$/                  // Empty or whitespace-only
// 🔹 Practice Examples
// js
// Copy
// Edit
// const str = "My phone is 987-654-3210 and email is hello@example.com";

// console.log(str.match(/\d{3}-\d{3}-\d{4}/)); // Phone
// console.log(str.match(/\w+@\w+\.\w+/));      // Email
// 🧠 RegEx Tricks to Remember
// 🟢 Use /.../ for patterns
// 🟡 Use [] for a choice
// 🔴 Use ^ and $ for string start/end
// 🔵 Use \ for shortcuts like \d, \w, etc.
// 🟣 Add g and i to make matching better!