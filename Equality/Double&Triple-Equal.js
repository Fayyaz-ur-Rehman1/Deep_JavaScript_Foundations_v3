const num1 = 11;
console.log(num1 == 11); // true, (==) it's called looseEquality, checks only values is it same or not. 
console.log(num1 == '11') // true.
console.log(num1 === '11') // false, (===) it's called strictEquality, checks values along data types.
// (==) only compares primitives. if the value is non primitive it's gonna turn into a primitive.

'5' == 5;     // true (String '5' is coerced to a Number)
null == undefined; // true (both are treated as equal)
'5' === 5;     // false (String '5' is not the same as Number 5)
null === undefined; // false (they have different types)

console.log(5 == '5'); // true
console.log(0 == false); // true
console.log([] == ![]);//true
console.log(null == undefined); // true

const obj1 = { key: 'value' };
const obj2 = { key: 'value' };
console.log(obj1 == obj2);

console.log('5' === 5);
console.log('5' == 5);
console.log(null == false);

const str = 'hello';
const num = 5;
if (str == num) {
    console.log('Equal');
} else {
    console.log('Not equal');
}

const person1 = { name: 'Alice', age: 25 };
const person2 = { name: 'Alice', age: 25 };
console.log(person1 === person2);

const x = '5';
const y = 5;
if (x === y) {
    console.log('Equal');
} else {
    console.log('Not equal');
}

console.log('' == '0');
console.log(0 == '');
console.log(0 == '0');

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2);
console.log(arr1 === arr2);

const a = null;
const b = undefined;
console.log(a == b);

const array = [1, 2, 3];
const notAnArray = '1,2,3';
console.log(array == notAnArray);
console.log(array === notAnArray);

console.log(true == 1);
console.log(false == 0);
console.log('' == 0);

const str1 = 'Hello';
const obj = {};
console.log(str1 == obj);

console.log(undefined == null);

const emptyArray = [];
if (emptyArray == 0) {
    console.log('Empty array');
} else {
    console.log('Non-empty array');
}

console.log({} == {});
console.log([] == []);

const num2 = 42;
const str2 = '42';

console.log(num2 === str2);
console.log(num2 == str2);