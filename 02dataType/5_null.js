/**
 * @description: Null data type in JavaScript
 * @note: Null is a primitive data type that represents the intentional absence of any object value. It is often used to indicate that a variable should not point to any object or value.
 */

// 🔍 Use Cases of null
// ✅ Explicitly clear a variable:
let user = { name: 'Alice' };
user = null; // clear reference (good for GC)
// ✅ Placeholder for object value:
let selectedUser = null;
// ✅ JSON placeholder:
const json = JSON.stringify({ name: null }); // {"name":null}
// ✅ DOM usage:
const el = document.querySelector('.not-exist'); 
console.log(el); // null
// ⚠️ Common Pitfalls
// 🔥 Comparison
console.log(null == undefined); // true ✅
console.log(null === undefined); // false ❌ (different types)
// 🔥 Typeof trap
console.log(typeof null); // "object" (wrong but expected behavior)

// ✅ Best Practices
// Do	                                          Don’t
// Use null to reset values	                  Don’t rely on typeof null
// Use === for strict checks	                  Don’t confuse with undefined
// Use null in JSON APIs	                      Avoid == unless intentional