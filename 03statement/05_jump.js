// break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
  }
  
  // continue statement
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
  }
  
  // return statement (inside function)
  function add(a, b) {
    return a + b; // Immediately exits function
  }
  console.log(add(2, 3)); // 5
  