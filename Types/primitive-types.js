// 1} String: Represents  a sequence of characters, enclosed in single or double quotes.
let name = "fayyaz";
console.log(name);
// 2} Number: Represents numeric values, including integers and floating-point numbers.
let age = 30;
console.log(age);
// 3} Boolean: Represents a true or false value.
let isStudent = true;
console.log(isStudent);
// 4} Undefined: Represents a variable that has been declared but has not been assigned a value.
let x;
console.log(x);
// 5} Null: Represents the intentional absence of any object value or no value at all.
let person = null;
console.log(person);
// 6} Symbol: (introduced in ECMAScript 6): Represents a unique and immutable value, often used as object property keys.
const uniqueKey = Symbol('description');
console.log(uniqueKey);
const a = Symbol(10);
const b = Symbol(10);
console.log(a == b);
// 7} BigInt: values represent numeric values which are too large to be represented by the number primitive
const bigIntLiteral = 1234567890123456789012345678901234567890n;
const bl̥ligIntFromConstructor = BigInt("1234567890123456789012345678901234567890");
console.log(bigIntLiteral);
// console.log(bigIntFromConstructor);

function isPrimitive(value) {
    return (typeof value !== 'object' && typeof value !== 'function') || value === null;
}

console.log(isPrimitive(5));        // true (number is a primitive)
console.log(isPrimitive('Hello'));  // true (string is a primitive)
console.log(isPrimitive(true));     // true (boolean is a primitive)
console.log(isPrimitive(null));     // true (null is a primitive)
console.log(isPrimitive(undefined));// true (undefined is a primitive)
console.log(isPrimitive(function () { }));// false


function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

console.log(isNullOrUndefined(null));       // true
console.log(isNullOrUndefined(undefined));  // true
console.log(isNullOrUndefined(42));         // false

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

console.log(isNumber(42));      // true
console.log(isNumber('42'));    // false
console.log(isNumber(NaN));     // false

function isString(value) {
    return typeof value === 'string';
}

console.log(isString('Hello'));  // true
console.log(isString(42));       // false

function isBoolean(value) {
    return typeof value === 'boolean';
}

// console.log(isBoolean(true));    // true
// console.log(isBoolean(0));       // false

function isSymbol(value) {
    return typeof value === 'symbol';
}

const mySymbol = Symbol('mySymbol');
console.log(isSymbol(mySymbol));  // true
console.log(isSymbol('abc'));     // false