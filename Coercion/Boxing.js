// Boxing : In JavaScript, "boxing" typically refers to a process in which primitive data types are temporarily converted into objects of their respective wrapper classes. This is done to allow the use of object-oriented methods and properties on these primitive values. JavaScript provides wrapper objects for primitive data types like numbers, strings, and booleans. These wrapper objects are Number, String, and Boolean, respectively.

var num = 42; // Primitive number
var boxedNum = new Number(num); // Boxing the primitive number
var sum = num + 10; // JavaScript automatically boxes 'num'
console.log(sum); // Outputs 52


var str = "Hello"; // Primitive string
var boxedStr = new String(str); // Boxing the primitive string
var length = str.length; // JavaScript automatically boxes 'str'
console.log(length); // Outputs 5

var bool = true; // Primitive boolean
var boxedBool = new Boolean(bool); // Boxing the primitive boolean
var not = !bool; // JavaScript automatically boxes 'bool'
console.log(not); // Outputs 'false'


// javascript use spaicial concept that is called boxing . boxing is use when any time use primitive method call then javascript particular method pe javascript priitive value convert in object like example => new String(str) new Number(age) new Boolean(isvalid) jvascript with help of new keyword to convert obect 

const age = 21;
const str = "hello";
const isvalid = true;

console.log(age.toString());
console.log(str.toLowerCase());
console.log(isvalid.toString());