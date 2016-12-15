window.jQuery
"use strict";
// alert("Hello World");
// console.log("Hello worldsss");
// debugger;
// var x = "My x";
// var x = "My x";
// x = "Another";

// var x = undefined;
// console.log(typeof x);

// var x = null;
// console.log(typeof x);

// var x = {
// key1: "value1",
// key2: "value2",
// "key3": "value3"
// };
// x.key1 = "new value";
// x["key2"] = "new value 2";
// console.log(typeof x);

// var x = ["element","element2",25, {},[],null];
// console.log(x[0]);
// x[2]=44;
// console.log(x[2]);
// console.log(typeof x);
// Array.isArray(x); // true

// var x function () {};
// x.key1 = "test";
// console.log(x.key1); //"test";
// console.log(typeof x); //"function";

var x = ["123"];
console.log(x); // ["123"];
var y = x;
console.log(y); // ["123"];
y[0]= 345;
console.log(y); // ["345"];
console.log(x); // ["345"];
