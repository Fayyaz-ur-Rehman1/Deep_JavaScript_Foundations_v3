// toNumber : In JavaScript, there is no built-in toNumber method like there is for toString. However, you can convert values to numbers using various techniques and functions. Here's how you can convert different data types to numbers

// '' Empty stirng become 0 first;
// === Operator and toString tell lies to us in NaN and in -0
// The data type of Null is object.

const num = 1;
const strNum = String(num); // '1'
const boolenNum = Boolean(num) // true, it gives us the boolen value according to the 1 or 0; if num is 0 it will returns, false;
const numberNum = Number(strNum) // 1
const boolenNum2 = Number(boolenNum) // 1
const toNull = Number(null); // 0, because they become empty string first & the value of empty string is 0;
const toUndefined = Number(undefined); //0
const nestedArr = Number([[[[]]]]); // 0, it become empty string first;
const nullToBoolean = Boolean(null) // false, we saw it before the value of null is 0 and the boolean considered 0 in false;
const undefinedToBoolean = Boolean(undefined) //false, same thing which has we saw over null;

const numericString = "42";
const numericValue = Number(numericString); // Converts the string to a number
console.log(numericValue); // 42

const nonNumericString = "abc";
const nonNumericValue = Number(nonNumericString); // Results in NaN
console.log(nonNumericValue); // NaN

const intString = "42";
const intValue = parseInt(intString); // Converts the string to an integer
console.log(intValue); // 42

const floatString = "3.14";
const floatValue = parseFloat(floatString); // Converts the string to a floating-point number
console.log(floatValue); // 3.14

function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    } else if (typeof value === 'string') {
        // Use parseFloat or parseInt to handle string conversions
        const number = parseFloat(value);
        return isNaN(number) ? 0 : number;
    } else if (typeof value === 'boolean') {
        // Convert true to 1 and false to 0
        return value ? 1 : 0;
    } else if (value instanceof Date) {
        // Convert Date objects to timestamps
        return +value;
    } else if (Array.isArray(value)) {
        // Handle arrays or return NaN if not possible to convert
        return value.length > 0 ? toNumber(value[0]) : NaN;
    }
    return NaN; // Default case: unable to convert
}

console.log(toNumber(42)); // 42
console.log(toNumber("3.14")); // 3.14
console.log(toNumber(true)); // 1
console.log(toNumber(new Date())); // Current timestamp
console.log(toNumber([5])); // 5
console.log(toNumber({})); // NaN



function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    } else if (typeof value === 'string') {
        // Use parseFloat to handle string conversions
        const number = parseFloat(value);
        if (isNaN(number)) {
            throw new Error(`Failed to convert string "${value}" to a number.`);
        }
        return number;
    } else if (typeof value === 'boolean') {
        // Convert true to 1 and false to 0
        return value ? 1 : 0;
    } else if (value instanceof Date) {
        // Convert Date objects to timestamps
        return +value;
    } else if (Array.isArray(value)) {
        // Handle arrays, summing up all valid numeric elements
        const numericSum = value.reduce((sum, element) => {
            const elementNumber = toNumber(element);
            return isNaN(elementNumber) ? sum : sum + elementNumber;
        }, 0);
        return numericSum;
    } else if (typeof value === 'object' && value !== null) {
        // Handle complex objects by attempting to convert nested properties
        let numericSum = 0;
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                const elementNumber = toNumber(value[key]);
                numericSum += isNaN(elementNumber) ? 0 : elementNumber;
            }
        }
        return numericSum;
    }
    throw new Error(`Unsupported data type: ${typeof value}`);
}

try {
    console.log(toNumber(42)); // 42
    console.log(toNumber("3.14")); // 3.14
    console.log(toNumber(true)); // 1
    console.log(toNumber(new Date())); // Current timestamp
    console.log(toNumber([5, "2", "abc"])); // 7 (ignores non-numeric elements)
    console.log(toNumber({ a: 10, b: "20", c: "xyz" })); // 30 (ignores non-numeric properties)
    console.log(toNumber(null)); // Error: Unsupported data type: object
} catch (error) {
    console.error(error.message);
}

console.log(Number(new Date()));