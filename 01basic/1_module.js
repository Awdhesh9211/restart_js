const fs = require("fs");
const path = require("path");
const os = require("os");
exports.name = "John Doe";
exports.age = 30;
const value=require("./children.js");

// console.log("value",value.value);   Hello World!
console.log("MODULE",module); // provide by nodejs engine {id,path,exports,filename,loaded,children,paths}
// MODULE {
//     id: '.',       // current module id
//     path: 'D:\\PRACTICE\\js',      // current module path
//     exports: { name: 'John Doe', age: 30 },      // current module exports
//     filename: 'D:\\PRACTICE\\js\\1_BASIC.js',    // current module filename
//     loaded: false,        // current module loaded status
//     children: [    // current module children modules
//       {
//         id: 'D:\\PRACTICE\\js\\children.js',
//         path: 'D:\\PRACTICE\\js',
//         exports: [Object],
//         filename: 'D:\\PRACTICE\\js\\children.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       }
//     ],
//     paths: [
//       'D:\\PRACTICE\\js\\node_modules',
//       'D:\\PRACTICE\\node_modules',
//       'D:\\node_modules'
//     ]
//   }
// console.log("EXPORTS",exports);
// console.log("REQUIRE",require);
// console.log("__dirname",__dirname);
// console.log("__filename",__filename);