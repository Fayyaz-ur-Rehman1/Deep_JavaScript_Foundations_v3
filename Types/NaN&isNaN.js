console.log(isNaN("fayyaz"));
console.log(isNaN(12));
console.log(isNaN(42));        // false (42 is a number)
console.log(isNaN("42"));      // false (can be converted to a number)
console.log(isNaN("Hello"));   // true (cannot be converted to a number)
console.log(isNaN(NaN));       // true (NaN is NaN)
console.log(isNaN(undefined)); // true (undefined cannot be converted to a number)
console.log(isNaN(null));   false

console.log(Number.isNaN(42));        // false (42 is a number)
console.log(Number.isNaN("42"));      // false (string "42" is not NaN)
console.log(Number.isNaN("Hello"));   // false (string "Hello" is not NaN)
console.log(Number.isNaN(NaN));       // true (NaN is NaN)
console.log(Number.isNaN(undefined)); // false (undefined is not NaN)
// For primitive types:

let primitiveNumber = 42;
let primitiveString = "Hello";
console.log(isNaN(primitiveNumber));  // false (42 is a number)
console.log(isNaN(primitiveString));  // true ("Hello" cannot be converted to a number)
// For non-primitive types (objects):
let nonPrimitiveObject = { key: "value" };
let nonPrimitiveArray = [1, 2, 3];
console.log(isNaN(nonPrimitiveObject)); // true (objects cannot be converted to a number)
console.log(isNaN(nonPrimitiveArray));  // true (arrays cannot be converted to a number)

function checkIfNumber(input) {
    if (isNaN(input)) {
        return "Input is not a number";
    } else {
        return "Input is a number";
    }
}

// Test cases
console.log(checkIfNumber(42));         // "Input is a number"
console.log(checkIfNumber("Hello"));    // "Input is not a number"
console.log(checkIfNumber(NaN));        // "Input is not a number"
console.log(checkIfNumber(undefined));  // "Input is not a number"

function sumValidNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // Use isNaN to check if the element is a valid number
        if (!isNaN(arr[i])) {
            sum += Number(arr[i]);
        }
    }
    return sum;
}

// Test cases
console.log(sumValidNumbers([1, 2, 3, "4", "Hello", "5"])); // Should return 15 (1 + 2 + 3 + 4 + 5)
console.log(sumValidNumbers(["42", "3.14", true, null, undefined])); // Should return 45.14 (42 + 3.14)