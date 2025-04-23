// 📅 What is Date in JS?
// JavaScript has a built-in object called Date used to work with dates and times.

const now = new Date();
console.log(now); // Current date and time

// create 
new Date();                          // Current date/time
new Date("2024-04-23");              // From string
new Date(2024, 3, 23);               // Year, Month(0-indexed), Day
new Date(2024, 3, 23, 10, 30, 0);    // With time: hours, minutes, seconds
new Date(0);                         // Epoch (Jan 1, 1970)

// ✅ Common Methods

// Method	Description	Example
// getFullYear()	Get 4-digit year	d.getFullYear() → 2024
console.log("YEAR=",now.getFullYear()); // 2025
// getMonth()	Get month (0-11)	d.getMonth() → 3 (April)
console.log("MONTH=",now.getMonth()); // 3 (April)
// getDate()	Get day of the month	d.getDate() → 23
console.log("DATE=",now.getDate()); // 23
// getDay()	Get weekday (0-6)	d.getDay() → 2 (Tuesday)
console.log("DAY=",now.getDay()); // 2 (Tuesday)
// getHours()	Get hour (0-23)	d.getHours()
console.log("HOURS=",now.getHours()); // 10
// getMinutes()	Get minutes	d.getMinutes()
console.log("MINUTES=",now.getMinutes()); // 30
// getSeconds()	Get seconds	d.getSeconds()
console.log("SECONDS=",now.getSeconds()); // 0
// getMilliseconds()	Get milliseconds	d.getMilliseconds()
console.log("SECONDS=",now.getSeconds()); // 0
// getTime()	Milliseconds since 1970	d.getTime()
console.log("TIME=",now.getTime()); // 1700000000000