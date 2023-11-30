// Closures are a fundamental concept in JavaScript, and they occur when a function is defined inside another function, allowing the inner function to access the outer function's variables and parameters even after the outer function has finished executing. This capability is a result of the lexical scoping feature in JavaScript, where the scope of a variable is determined by its location within the source code.

function outerFunction(x) {
    // Inner function defined inside outerFunction
    function innerFunction(y) {
        console.log(x + y);
    }
    // Returning the inner function from outerFunction
    return innerFunction;
}
// Creating a closure by calling outerFunction and assigning the result to a variable
let closure = outerFunction(10);
// Using the closure to access both inner and outer function variables
closure(5); // Outputs: 15

function outerfncluser(a) {
    function innerfncluser(b) {
        console.log(a + b);
    }
    return innerfncluser;
}
let clouser = outerfncluser(10);
clouser(20)