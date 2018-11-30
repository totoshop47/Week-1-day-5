var myModule = require("./store-module.js");

// console.log(myModule);
// console.log(myModule.list());
// console.log(myModule.data());

myModule.list(2);
myModule.list(3);
myModule.list(6);
myModule.list(10);
myModule.list(14);
myModule.list(25);
myModule.list(-77);

console.log(myModule.data());