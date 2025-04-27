try {
    // Code that might throw an error
    let num = 10;
    console.log(num.toUpperCase()); // Error!
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("This always runs, error or not");
  }
  