// process 
// current process info 


// console.log("PROCESS",process);
// Feature	            काम
// argv              	Command line args
// env	                Environment variables
// exit(code)	        Process खत्म करना
// memoryUsage()	    Memory stats
// uptime()	            Process का time
// on('exit')	        Exit पर काम करना
// platform	            OS platform info


// function/key/obj               value 
// process.version                node version
console.log("process.version",process.version);
// process.versions               node version info
console.log("process.versions",process.versions);
// process.arch                  architecture info
console.log("process.arch",process.arch);
// process.pid                   process id
console.log("process.pid",process.pid);
// process.ppid                  parent process id
console.log("process.ppid",process.ppid);
// process.title                process title
console.log("process.title",process.title);
// process.platform             OS platform info
console.log("process.platform",process.platform);
// process.env                 environment variables
console.log("process.env",process.env); // --name=John --age=30
// process.memoryUsage()       memory usage info
console.log("process.memoryUsage()",process.memoryUsage()); // { rss: 123456, heapTotal: 123456, heapUsed: 123456, external: 123456 }
// process.uptime()           process uptime in seconds
console.log("process.uptime()",process.uptime()); // 123.456
// process.cwd()             current working directory
console.log("process.cwd()",process.cwd()); // D:\PRACTICE\js\basic
// process.exit(code)       exit the process with code
console.log("process.exit(0)"); // exit the process with code 0
// process.nextTick(callback)  schedule a callback to be invoked in the next iteration of the event loop
process.nextTick(() => {
    console.log("Next Tick Callback");
});
// process.on(event, listener)  register an event listener for the process object
process.on("exit", (code) => {
    console.log(`Process exited with code: ${code}`);
});
// process.stdin             standard input stream
process.stdin.on("data", (data) => {
    console.log(`Received data: ${data}`);
});
// process.stdout            standard output stream
process.stdout.write("Hello World\n");
// process.stderr            standard error stream
process.stderr.write("Error: Something went wrong\n");
// process.argv             command line arguments 
// process.argv[0]         path to node executable
console.log("process.argv[0]",process.argv[0]); // path to node executable 
// process.emit(event, args)    emit an event with arguments
process.emit("exit", 0); // emit exit event with code 0