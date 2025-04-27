outerLoop: for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (i === 1 && j === 1) break outerLoop;
      console.log(i, j);
    }
  }
  