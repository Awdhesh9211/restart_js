const fs = require("fs");
const path = require("path");
const os = require("os");
const value=require("./children.js");
console.log("REQUIRE",require);
// { resolve,main,extensions,cache } = require;
// REQUIRE [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },  //
//     main: {
//       id: '.',
//       path: 'D:\\PRACTICE\\js\\basic',
//       exports: {},
//       filename: 'D:\\PRACTICE\\js\\basic\\3_require.js',
//       loaded: false,
//       children: [ [Object] ],
//       paths: [
//         'D:\\PRACTICE\\js\\basic\\node_modules',
//         'D:\\PRACTICE\\js\\node_modules',
//         'D:\\PRACTICE\\node_modules',
//         'D:\\node_modules'
//       ]
//     },
//     extensions: [Object: null prototype] {
//       '.js': [Function (anonymous)],
//       '.json': [Function (anonymous)],
//       '.node': [Function (anonymous)]
//     },
//     cache: [Object: null prototype] {
//       'D:\\PRACTICE\\js\\basic\\3_require.js': {
//         id: '.',
//         path: 'D:\\PRACTICE\\js\\basic',
//         exports: {},
//         filename: 'D:\\PRACTICE\\js\\basic\\3_require.js',
//         loaded: false,
//         children: [Array],
//         paths: [Array]
//       },
//       'D:\\PRACTICE\\js\\basic\\children.js': {
//         id: 'D:\\PRACTICE\\js\\basic\\children.js',
//         path: 'D:\\PRACTICE\\js\\basic',
//         exports: [Object],
//         filename: 'D:\\PRACTICE\\js\\basic\\children.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       }
//     }
//   }


console.log("__dirname",__dirname);
console.log("__filename",__filename);
// __dirname D:\PRACTICE\js\basic
// __filename D:\PRACTICE\js\basic\3_require.js