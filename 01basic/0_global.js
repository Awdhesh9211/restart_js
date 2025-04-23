const crypto = require("crypto");
console.log(global);
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */}
// 1.GLOBAL 
// global is an object that provides a way to define global variables and functions accessible from anywhere in your Node.js application.
// global is the global namespace object. It’s like window in browsers.
// ex.1
global.myVar = "I am global";
function showVar() {
    console.log(myVar); // I am global
}
showVar();
// ex.2
global.CONFIG = {
    appName: "MyApp",
    version: "1.0.0"
};
// anotherFile.js
console.log(global.CONFIG.appName); // MyApp
// ex.3
global.log = console.log;
log("This works anywhere!");
// but batter way for configuration is to use environment variables or a configuration file.
// module.exports

// 2.clearImmediate
// 3.setImmediate
// When you schedule some code to run later using setImmediate() but under certain conditions you decide to cancel it before it runs.
function scheduleTask() {
    const task = setImmediate(() => {
      console.log("Task executed");
    });
  
    // Simulate some condition to cancel
    const shouldCancel = false;
  
    if (shouldCancel) {
      clearImmediate(task);
      console.log("Task was cancelled");
    }
}
scheduleTask();

// 4.clearInterval - stop a repeating task
// 5.setInterval - schedule a repeating task
// const intervalId = setInterval(callback, delay, ...args);
// callback: function to run
// delay: time in ms between each execution
// ...args: optional arguments passed to callback
let count = 0;
const intervalId = setInterval(() => {
  console.log("Repeating Task:", ++count);
  if (count === 5) {
    clearInterval(intervalId); // Stop after 5 runs
    console.log("Stopped interval");
  }

}, 1000);

// 6.clearTimeout - stop a scheduled task
// 7.setTimeout - schedule a task to run once after a delay
// const timeoutId = setTimeout(callback, delay, ...args);
// callback: function to run
// delay: time in ms before execution
// ...args: optional arguments passed to callback
// ex.1
const timeoutId = setTimeout(() => {
    console.log("This will run after 2 seconds");
}, 2000);
// ex.2 
const timeoutId2 = setTimeout(() => {
    console.log("This will run after 3 seconds");
}, 3000);
// Cancel the timeout before it runs
clearTimeout(timeoutId2); // This will prevent the second message from appearing        

// 8.queueMicrotask - schedule a microtask to run after the current event loop phase
// higher priority than setTimeout and setImmediate and setInterval
queueMicrotask(() => {
    // my code 
    console.log("Microtask");
});
function processBigArray(arr) {
    if (arr.length === 0) return;
  
    // process 1 item at a time without call stack growing
    const item = arr.pop();
    console.log(item);
  
    queueMicrotask(() => processBigArray(arr));
}
processBigArray([1, 2, 3, 4, 5]);

// 9.structuredClone - create a deep copy of an object
// structuredClone(value) creates a deep clone of a given JavaScript value, handling many complex data types that JSON.parse(JSON.stringify(...)) can't.
const original = {
    name: "Awdhesh",
    age: 22,
    nested: {
      skills: ["Node.js", "React"]
    }
  };
  
  const clone = structuredClone(original);
  
  clone.nested.skills.push("MongoDB");
  
  console.log(original.nested.skills); // ['Node.js', 'React']
  console.log(clone.nested.skills);    // ['Node.js', 'React', 'MongoDB']

// 10.atob - decode a base64 encoded string
// Binary to ASCII	Encodes a string to Base64
// 11.btoa - encode a string to base64
// ASCII to Binary	Decodes a Base64 string
// Encode
const encoded = btoa("Hello World"); // "SGVsbG8gV29ybGQ="
console.log(encoded); // "SGVsbG8gV29ybGQ="
// Decode
const decoded = atob(encoded); // "Hello World"
console.log(decoded); // "Hello World"
// Use workaround for Unicode: in browser window.btoa() and window.atob()
// const safeEncoded = btoa(unescape(encodeURIComponent("JavaScript ❤️")));
// const safeDecoded = decodeURIComponent(escape(atob(safeEncoded)));
// Encode
const useInNodejsEncode = Buffer.from("Hello Node").toString("base64"); // "SGVsbG8gTm9kZQ=="
// Decode
const useInNodejsDecode = Buffer.from(encoded, "base64").toString("utf-8"); // "Hello Node"

// 12.performance - get performance metrics
const start = performance.now();
// some work
for (let i = 0; i < 1e6; i++) {}
const end = performance.now();
console.log(`Took ${end - start} ms`);
// ex.2
performance.mark('start');
for (let i = 0; i < 1e6; i++) {}
performance.mark('end');
performance.measure('loop-duration', 'start', 'end');
console.log(performance.getEntriesByType('measure'));

// 13.fetch - make HTTP requests
// Step 2: Send to server via fetch
// await fetch("https://example.com/verify", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ token }),
//   });

// 14.crypto - cryptographic operations
// Hashing Password 
const hash = crypto.createHash('sha256')
  .update('mypassword')
  .digest('hex');
console.log('SHA256 Hash:', hash);
// generate secure token 
const token = crypto.randomBytes(32).toString('hex');
console.log('Secure Token:', token);
// HMAC (Hash-based Message Authentication Code)
const secret = 'mySecretKey';
const hmac = crypto.createHmac('sha256', secret)
  .update('data-to-sign')
  .digest('hex');
console.log('HMAC:', hmac);
// Symmetric Encryption/Decryption (AES)
const key = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16);  // Initialization vector
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update('Hello World', 'utf-8', 'hex');
encrypted += cipher.final('hex');
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log({ encrypted, decrypted });
