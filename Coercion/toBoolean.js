// // toBoolean : In deep JavaScript, "boolean" refers to the Boolean data type, which is a primitive data type in JavaScript. A Boolean represents one of two values: true or false. It's often used for making decisions in conditional statements and controlling the flow of a program. Here are some key points about Booleans

let num = 12;
console.log(Boolean(num));//true
let str = "2"
console.log(Boolean(str));//true
let array = [1, 2, 3, 4];
console.log(Boolean(array)); // true
let num2 = 0
console.log(Boolean(num2));//false

let num3 = -0
console.log(Boolean(num3));//false

const isTrue = true;
const isFalse = false;

console.log(isTrue && isFalse); // false (true AND false)
console.log(isTrue || isFalse); // true (true OR false)
console.log(!isFalse); // true (NOT false)

const condition = true;
if (condition) {
    console.log("The condition is true.");
} else {
    console.log("The condition is false.");
}

const booleanObject = new Boolean(true);
console.log(booleanObject.valueOf()); // true

function toboolean(value) {
    if (typeof value === 'boolean') {
        return value;
    } else if (typeof value === 'string') {
        // Return true for non-empty strings, and false for empty strings
        return value.length > 0;
    } else if (typeof value === 'number') {
        // Return false for NaN and 0, true for all other numbers
        return value !== 0 && !isNaN(value);
    } else if (value instanceof Date) {
        // Return true for Date objects
        return true;
    } else if (Array.isArray(value)) {
        // Return true for non-empty arrays, false for empty arrays
        return value.length > 0;
    } else if (typeof value === 'object' && value !== null) {
        // Return true for non-empty objects, false for empty objects
        return Object.keys(value).length > 0;
    } else {
        // Handle other cases by returning false
        return false;
    }
}

console.log(toboolean(42)); // true
console.log(toboolean("Hello"));  // true
console.log(toboolean(0)); // false
console.log(toboolean(new Date())); // true
console.log(toboolean([])); // false
console.log(toboolean({ key: "value" })); // true
console.log(toboolean(null)); // false