//  This Keyword => The javascript this keyword refers to the object it belongs to.
// it has defferent values depending on where it is used :
// "use strict"
//  Alone this refers to the global object mean window object.
console.log(this); // refer to window object.

//  In a Regular function , this refers to the global object mean window object.
function fn1() {
    let sum = 3 + 3;
    console.log("sum of 2 number " + sum);
    console.log(this); // refer to window object
}
fn1()

//  In a method , this refers to the owner object.
const owner = {
    name: "fayyazurrehman",
    age: 18,
    study: "12th",
    sum: function () {
        let sumvalue = 3 + 3;
        console.log("sum of two number " + sumvalue);
        console.log(this.name);
        console.log(this);
    }
}
owner.sum();

// In a function in strict mode , this is undefined


function fn2() {
    let sum = 3 + 3;
    console.log("sum of 2 number " + sum);
    console.log(this); // refer to window object
}
fn2()

const obj = {
    name: "fayyaz",
    age: 18,
    objmethod: function () {
        console.log("hello guys");
        console.log(this);
        function innerfn() {
            var name = 'fayyaz'
            console.log("i am" + name);
            console.log(this); // refer to window object
        }
        innerfn()
    }
}
obj.objmethod()