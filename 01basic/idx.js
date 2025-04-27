// JavaScript in the browser
// // 🔹 The Window Object
// // The window object represents the browser window and is the global object in the browser environment. It provides access to the browser's features and functions, such as the DOM, alerts, and timers.
console.log(window);           // whole window object
console.log(window.document);  // same as document

// console.log 
console.log(console)
console.log("This is a log");
console.error("This is an error");
console.warn("This is a warning");
console.info("This is an info message");
console.debug("This is a debug message");
console.table([{name: "John", age: 30}, {name: "Jane", age: 25}]); // table format
console.time("Timer"); // start timer
console.timeEnd("Timer"); // end timer and log elapsed time
console.assert(1 === 2, "This is an assertion error"); // assert condition

// setTimeout and setInterval
setTimeout(() => {
    console.log("Runs after 2 seconds");
  }, 2000);
  
  let count = 0;
  const intervalId = setInterval(() => {
    console.log("Interval running", count++);
    if (count === 3) clearInterval(intervalId); // stop after 3 times
  }, 1000);

// Could be GET or POST/PUT/PATCH/DELETE
fetch('https://dummyjson.com/test')
.then(res => res.json())
.then(console.log);

// alert, prompt, confirm
alert("Hello World!");               // simple popup
let name = prompt("What's your name?");  // input from user
let sure = confirm("Are you sure?");     // yes/no
console.log(name, sure);

// local storage 
localStorage.setItem("name", "Awdhesh");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
localStorage.clear(); // clear all local storage

// navigation and location
console.log(navigator.userAgent); // browser info
console.log(location.href);       // current URL

// date and math 
let today = new Date();
console.log(today.toDateString());

console.log(Math.random());   // random number between 0-1
console.log(JSON.stringify({ name: "Awdhesh" }));



