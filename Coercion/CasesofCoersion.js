// String Coercion:
// When using the + operator, values are coerced to strings if one of the operands is a string. Using values in string interpolation (template literals) coerces them to strings.
const num = 42;
const str = "The answer is " + num; // Coercion to string
console.log(str); // "The answer is 42"


// Numeric Coercion:
// When using mathematical operators (e.g., +, -, *, /), non-numeric values are coerced to numbers.Using parseInt() and parseFloat() functions explicitly coerce strings to numbers.
const numericStr = "42";
const result = numericStr * 2; // Coercion to number
console.log(result); // 84


// Boolean Coercion:
// When using logical operators (e.g., &&, ||, !), values are coerced to Booleans.Conditional statements (if, while, etc.) rely on Boolean coercion for condition evaluation.
const truthyValue = "Hello";
if (truthyValue) {
    console.log("Truthy value is true.");
}
const falsyValue = 0;
if (!falsyValue) {
    console.log("Falsy value is false.");
}


// Comparison Coercion:
// When using comparison operators (e.g., ==, ===, !=, !==), values may be coerced to allow comparisons between different types.
const num2 = 42;
const str2 = "42";
console.log(num2 == str2); // true (loose equality, coercion)
console.log(num2 === str2); // false (strict equality, no coercion)


// Array Coercion:
// Arrays can be coerced to strings using the join() method, resulting in a comma-separated string representation of the array elements.
const arr = [1, 2, 3];
const str3 = arr.join(", "); // Coercion to string
console.log(str3); // "1, 2, 3"


// Object Coercion:
// Objects can be coerced to strings using the toString() method, but the default behavior is to return "[object Object]".
const obj = { key: "value" };
const str4 = obj.toString(); // Coercion to string
console.log(str4); // "[object Object]"