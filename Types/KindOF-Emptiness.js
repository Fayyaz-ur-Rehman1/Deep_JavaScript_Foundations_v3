// Undefined. // Undefined is absolutely equal to itself.
// Undeclared.  

//  Undefined Means There's definitely a variable and at the moment it has no value.
//  Undeclared Means It's never been declared in any scope. That we access to.

var a;
console.log(a)// this is undefind

let = 'fayyaz'
console.log(let)// this is undecleard

// b = 'good boy'
// console.log(b)// unincilaised

let variable1; // uninitialized variable (undefined)
const variable2 = null; // explicitly set to null

console.log(variable1); // undefined
console.log(variable2); // null

// console.log(undeclaredVariable); // ReferenceError: undeclaredVariable is not defined

let uninitializedVariable;
console.log(uninitializedVariable); // undefined

console.log(typeof undeclaredVariable); // "undefined"

console.log(a); // undefined (hoisted)
var a;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b;

// console.log(f); // ReferenceError: Cannot access 'c' before initialization
// const f;

if (typeof someVariable === "undefined") {
    console.log("someVariable is undefined");
}

console.log(d); // undefined (hoisted)
var d = 5;

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 10;

