// function declaration
function declaration(a, b) { // you write function name and you call the function name that is called function declaration
    return a + b;
}
console.log(declaration(10, 5));

// function Expression
// console.log(expression(10,5));
let expression = function (a, b) { // any function have not name but function assing the variable that is called fuunction Expression in this function in not work hosting you call on the function that is give error
    return a - b;
}
console.log(expression(10, 5));