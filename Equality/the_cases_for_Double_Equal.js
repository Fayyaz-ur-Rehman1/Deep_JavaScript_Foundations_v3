if (someValue == true) {
  // This condition is true if someValue is truthy (not necessarily equal to true)
}

var obj1 = { name: "John", age: 30 };
var obj2 = { name: "John", age: 30 };

if (obj1 == obj2) {
  // This condition is true because the objects have the same properties and values
}

var userInput = "42";
var num = 42;

if (userInput == num) {
  // This condition is true, and userInput has been coerced to a number for comparison
}
