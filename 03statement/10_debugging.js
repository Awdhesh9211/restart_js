function testDebugger() {
    debugger; // Will pause here if DevTools are open
    console.log("After debugger");
  }
  testDebugger();
  