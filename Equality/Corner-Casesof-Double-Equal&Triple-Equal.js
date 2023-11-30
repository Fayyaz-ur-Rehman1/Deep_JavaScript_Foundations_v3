// Corner Cases for == (Double Equals):

5 == '5' // true, because the string '5' is coerced to a number
false == 0 // true, because both are falsy values
null == undefined // true, because they are considered equal
NaN == NaN // false
'5' == 5 // true
'5' == '5' // true
'5' == [5] // true

// Corner Cases for === (Triple Equals):

5 === 5 // true, because both value and type are the same
'5' === 5 // false, because the types are different
NaN === NaN // false
var obj1 = { key: 'value' };
var obj2 = { key: 'value' };
obj1 === obj2 // false, as they are different objects in memory
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
arr1 === arr2 // false, as they are different arrays in memory
