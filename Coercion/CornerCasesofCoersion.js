// Truthy and Falsy Values:
// JavaScript has a concept of truthy and falsy values. In conditional statements, non-boolean values are automatically coerced to either true or false. Some corner cases include:

if (1) {
    // This code will execute because 1 is truthy.
}
if (0) {
    // This code will not execute because 0 is falsy.
}
if ("0") {
    // This code will execute because "0" is truthy.
}
if (null) {
    // This code will not execute because null is falsy.
}

// Type Coercion with == (Abstract Equality):
// The == operator performs type coercion when comparing values. This can lead to unexpected results, such as:

1 == '1';      // true
0 == '';       // true
false == 0;    // true
null == undefined; // true

// NaN (Not-a-Number): NaN is a special value in JavaScript that represents an invalid number. However, some coercions involving NaN can be tricky:

NaN == NaN;    // false
isNaN("Hello"); // true

// Adding Arrays and Objects:
// The + operator can be used for addition, but it can also concatenate strings. When used with arrays or objects, it can lead to unexpected results:

[1, 2] + [3, 4]; // "1,23,4"
{ a: 1 } + { b: 2 }; // "[object Object][object Object]"

// Type Coercion with || and &&:
// The logical OR (||) and AND (&&) operators perform type coercion and return the value that stopped the evaluation. This can lead to unexpected results when working with non-boolean values.

"Hello" || "World";   // "Hello"
"" && "World";        // ""

// When non-numeric values are coerced to numbers, JavaScript attempts to convert them:

+"123";       // 123
+"Hello";      // NaN