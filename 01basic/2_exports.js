exports.name = "John Doe";
exports.age = 30;
exports.fullname = function () {
  return this.name + " " + this.age;
};
const value=require("./children.js");

console.log("EXPORTS",exports);
// EXPORTS { name: 'John Doe', age: 30, fullname: [Function (anonymous)] }