// Callback function => any function that is passed as an argument is called a callback function.
// A callback is a function that is to be use executed after another function has finished executing - hence the name 'callback'

const fnA = () => {
    setTimeout(function () {
        console.log("my name is fayyazurrehman");
    }, 4000)
}
const fnB = () => {
    console.log("my name is danish chouhan");
}
fnA();
fnB();

function personone(freind, callfrind) {
    console.log(`i am busy rigth Now.i am taking to ${freind} . i will call you back `);
    callfrind()
}
function persontow() {
    console.log(`Hey what's up.I call back you dekha.`);
}
personone("mahid", persontow)