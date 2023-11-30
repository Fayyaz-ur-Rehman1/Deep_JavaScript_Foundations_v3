var booleanObject = new Boolean(false);
if (booleanObject) {
  // This block will execute, as any object is truthy
}
if (booleanObject == false) {
  // This block will execute because it uses loose equality
}

var x = 0;
if (x) {
  // This block will not execute because 0 is falsy
}

var value = "hello";
if (value) {
  // This block will execute because "hello" is a truthy value
}

var emptyString = "";
if (!emptyString) {
  // This block will execute because an empty string is falsy
}

true == 1; // true, because both are truthy values
false == 0; // true, because both are falsy values

true === 1; // false
false === 0; // false