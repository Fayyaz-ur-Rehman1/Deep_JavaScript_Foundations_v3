// jitne bi variable declaration hote hai onko apne scope mai ek dm top pr move karadiya jata hai code se suru hone se pahale 
// variable declaration and function declaration top pe apne hi scope mai move krvadiya jata hai jaha function ko move krte hai tu pori ki pori property ko hi move krdete hai exitige jab variable ko krte hena tu undifiend set krdiya jata hai that is called hoisting.

console.log(a);
var a ; 
a = 10;
var a = undefined;
console.log(a);
a = 10;

fn()
function fn(){
      console.log("my name is fayyaz")
}
console.log(fn1(2,4))

function fn1(a,b){
    return a + b
}

// browser check hoisting
function fn1(a,b){
    return a + b
}
console.log(fn1(2,4))