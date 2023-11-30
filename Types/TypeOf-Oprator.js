// TypeOf_Opreator
// Typeof in JavaScript is an operator used for type checking and returns the data type of the operand passed to it. The operand can be any variable, function, or object whose type you want to find out using the typeof operator.

let name = "fayyaz";
console.log(typeof name);

let age = 30;
console.log(typeof age);

let isStudent = true;
console.log(typeof isStudent);

let x;
console.log(typeof x);

let person = null;
console.log(typeof person);

const uniqueKey = Symbol('description');
console.log(typeof uniqueKey);

const bigIntLiteral = 1234567890123456789012345678901234567890n;
const bigIntFromConstructor = BigInt("1234567890123456789012345678901234567890");
console.log(typeof bigIntLiteral);
console.log(typeof bigIntFromConstructor);

let number = 42;
let string = 'Hello';
let boolean = true;

console.log(typeof number);  // 'number'
console.log(typeof string);  // 'string'
console.log(typeof boolean); // 'boolean'

let obj = {};
let arr = [];
let func = function () { };

console.log(typeof obj);   // 'object'
console.log(typeof arr);   // 'object' (arrays are objects in JavaScript)
console.log(typeof func);  // 'function'

function getTypeOf(value) {
    return typeof value;
}

console.log(getTypeOf(42));           // "number"
console.log(getTypeOf("Hello"));      // "string"
console.log(getTypeOf(true));         // "boolean"
console.log(getTypeOf(null));         // "object"
console.log(getTypeOf(undefined));    // "undefined"
console.log(getTypeOf({}));           // "object"
console.log(getTypeOf([]));           // "object" (arrays are objects in JavaScript)
console.log(getTypeOf(function () { })); // "function"

const symbol = Symbol('mySymbol');
console.log(getTypeOf(symbol));       // "symbol"


const objA = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      zip: "10001"
    }
  };
  
  const objB = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      zip: "10001"
    }
  };
  
  const objC = {
    name: "Alice",
    age: 25,
    address: {
      street: "456 Elm St",
      city: "Otherville",
      zip: "20002"
    }
  };
  
  console.log(deepEqual(objA, objB)); // true
  console.log(deepEqual(objA, objC)); // false
  