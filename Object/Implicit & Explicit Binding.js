// -------------------Explicit-------------------

// Call() Method =>
//  the call() method is a predefiend javascript method.
//  with call(), an object can use method belonging to another object.
// Diffrence
// the call() method takes argument separately .
// the apply() method takes argument as an array . 

//  ek object dusre object kai method ko call krna hu ya fir osko use krna tab ap call method ka use ki jiyai 
 
const obj_1 = {
    name: "fayyazurrehman",
    study: "12th",
    age: 17,
    feature: function (country) {
        console.log(`i am fullstack developer my name is = ${this.name}. and my age is = ${this.age}. and i am study in class ${this.study} i leave in ${country}`);
    }
}
// obj_1.feature("india")
const obj_2 = {
    name: "kuchbi",
    study: "0th",
    age: 0,
}
// obj_1.feature.call(obj_2); // call method first argument take second object we are get value in object then give first argumment in call method

const obj_3 = {
    name: "fayyazurrehman",
    study: "12th",
    age: 17,
    feature2: function (country, state) {
        console.log(`i am fullstack developer my name is = ${this.name}. and my age is = ${this.age}. and i am study in class ${this.study} i leave in ${country} my state is ${state}`);
    }
}
// obj_1.feature2("india")
const obj_4 = {
    name: "kuchbi",
    study: "0th",
    age: 0,
}
// obj_3.feature2.call(obj_4,"india","Rajasthan"); //// the call() method takes argument separately . call method first argument take second object we are get value in object then give first argumment in call method and you give perameter in fuction the give value in call method in second argument  

// ------------------------------------------------------------------------

// Apply() Method =>
// the apply() method is simmilar to the call() method.
// Diffrence
// the call() method takes argument separately .
// the apply() method takes argument as an array . 

const obj_5 = {
    name: "fayyaz",
    age: 18,
    methodfn: function (country, game, study) {
        console.log(`my name is ${this.name} and my age is ${this.age} i leave in ${country} and my fav game is ${game} i study in class ${study}year`);
    }
}
const obj_6 = {
    name: "adnan",
    age: 21,
}
// obj_5.methodfn.apply(obj_6,["india","tikondow",2]) // the apply() method takes argument as an array . 

const maxarr = Math.max.apply(null, [1, 2, 3, 4, 5]);
// console.log(maxarr);

// --------------------------------------------------------------------------

// bind() Method =>
// by this method , we can bind an object to a common function , so that the function given defferent result when its needs
// the bind() method takes an object as an first argument and create a new function.

const obj_7 = {
    favyoutuber: "Thapatechnical",
    favfeature: "programmer",
    youtuberfn: function () {
        console.log(`my favrioute youtuber is ${this.favyoutuber} and my dream is one day i am best ${this.favfeature}`);
    }
}
// let youtuberfn1 = obj_7.youtuberfn.bind(obj_7);
// youtuberfn1() // the bind() method takes an object as an first argument and create a new function.

const bind_obj_1 = {
    name: "fayyaz",
    age: 17,
    study: "12th",
}

const bind_obj_2 = {
    name: "danish",
    age: 18,
    study: "12th dummy",
}

const bind_obj_3 = {
    name: "adnan",
    age: 21,
    study: "2year",
}

const bind_obj_4 = {
    name: "sahanawaz",
    age: 20,
    study: "1year",
}

function freinds(freind, dream) {
    console.log(`my name is ${this.name} my age is ${this.age} i study in class ${this.study} this all are my best ${freind} this all are dream is one day create best ${dream}`);
}

let bind_obj_fn = freinds.bind(bind_obj_3);
bind_obj_fn("freind", "programmer");