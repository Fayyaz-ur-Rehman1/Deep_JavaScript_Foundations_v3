//  A function with laxical scope is a clouser

function test() { // outerfunction clouser
    let a = 100;
    return function inner() { // inner function clouser
        return a;
    }
}
const inner = test();
console.log(inner());

function outerfn() { //outerfunction 
    let outerVaule = 100
   return function test1() {   // inner function  clouser
        let a = 300;
        return function inner1() {  // inner inner function clouser
            return a * outerVaule;
        }
    }
}
let test1 = outerfn()
const inner1 = test1();
// console.log(inner1());
console.dir(inner1);


 function test2() {   // outer function  clouser
    let a = 300; // remember
    let fun = function inner2() {  // inner inner function clouser
        a++
        return a;
        // a = 10;
        // return a * a;
    }
    // a = 20
    return fun
}
const inner2 = test2();
console.log(inner2());
// console.log(inner2());
// console.log(inner2());
// console.log(inner2());
// console.log(inner2());