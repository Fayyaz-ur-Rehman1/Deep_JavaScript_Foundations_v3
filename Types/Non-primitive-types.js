// Non primitive type

// 1} Object: The most fundamental non-primitive type in JavaScript is the Object. Objects can hold key-value pairs, making them suitable for representing structured data.
let obj = {}
console.log(typeof obj);

// 2} Function: Functions are also objects in JavaScript. They can be assigned to variables, passed as arguments, and returned from other functions. Functions are used to define reusable blocks of code.
console.log(typeof function fn(){}); 

//3} Array: Arrays are specialized objects in JavaScript designed to store collections of data. They are ordered and use numerical indices to access elements.
let arr = [];
console.log(typeof arr);

//4}  Date: The Date object is used to work with dates and times in JavaScript.
let currentDate = new Date();
console.log(currentDate);

//5} class Custom Objects: You can create your own custom objects by defining constructor functions or using ES6 classes. This allows you to model complex data structures as needed for your applications.
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }
  
  let myCar = new Car("Toyota", "Camry");
console.log( myCar);  


let person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
    },
  };

  console.log(typeof person);

  let colors = ["red", "green", "blue"];
console.log(colors);

function add(a, b) {
    return a + b;
  }
  
