// how javascript works => javascript work jsEngine any broswer have jsEngine javascript run in jsEngine  => parser  mean pass parser check code syntax are rigth or not if code syntax are worng then give error . AST the parser create an Abstract Syntax Tree. Conversion to Machine Code =>  the code convert machine code . Code Run => then Run the code 

// Execution Context => the enviroment in which our code is executed and is evaluated   Global Execution Context default => javascript engine create the global execution context before it starts to execute any code . Variable , and function that is not inside any function . A new excution context gets created every time a function is excuted . The Global execution context just like any other execution context , except that it gets created by default . it is associated with Global Object . Which means a window object. Ex.this === windeow,name == window.name

// Execution stack => also known as "calling stack " is a stack with a LIFO (last in , first out) structure , which is used to store all the execution context create during the code execution .

var globalEc = "added";

function a() {
    var fa = "2an function o/p2";
    console.log(fa);
    debugger;
    b()
    console.log("let's see when i will be onn console.");
}
function b() {
    debugger;
    console.log("2and function o/p2");
    c();
}
function c() {
    debugger;
    console.log("3rd function o/p3");
}
debugger;
a();

// Execution-Property =>  Variable Object  , ScopeChain , 'this'Variable