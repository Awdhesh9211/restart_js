// for loop
for (let i = 0; i < 3; i++) {
    console.log("For Loop i =", i);
  }
  
  // while loop
  let j = 0;
  while (j < 3) {
    console.log("While Loop j =", j);
    j++;
  }
  
  // do-while loop
  let k = 0;
  do {
    console.log("Do-While Loop k =", k);
    k++;
  } while (k < 3);
  
  // for...in loop (for object properties)
  const obj = { name: "John", age: 25 };
  for (let key in obj) {
    console.log(key, "=", obj[key]);
  }
  
  // for...of loop (for iterable objects like arrays)
  const arr = [10, 20, 30];
  for (let value of arr) {
    console.log(value);
  }
  