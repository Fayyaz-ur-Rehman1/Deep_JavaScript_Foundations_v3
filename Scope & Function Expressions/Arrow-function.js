// Arrow function => arrow function (also called fact arrow function )are undoubtedly one of the ore popular feature of ES6. they intrduced a new way of writing concise function.
// arrow function apne code ko siplify krdeta hai or better tarike se hm osko dekh sakte hai or ispe kam kr sakte hai 

let arrow1 = () => console.log("fayyazurrehman");
arrow1();

let arrow2 = (a, b) => a + b
console.log(arrow2(2, 4));

let arrow3 = (name) => {
    return `my name is ${name}`
}
console.log(arrow3('fayyazurrehman'));


// function expression
let fnexp = function (a, b) {
    return a - b
}
console.log(fnexp(3, 8));