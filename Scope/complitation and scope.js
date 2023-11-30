var msg = "A nice day";
function greet() {
    console.log(msg);
    var msg = "Good Morning"
    console.log(msg + "to you");
}
greet()
function sqr(n) {
    console.log(n * n);
}

// Compilation & Scope

// global
// => msg
// => greet
// => sqr

// greet ka scope
// => msg

// sqr ka scope
// => n