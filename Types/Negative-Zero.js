// Negetive zero =>  is equal to itself;
// false bcz -0 is not equal to 0
let zero = -0;
console.log(zero)
let trip_x = 0 === zero
console.log(trip_x)
console.log(zero.toString()); // When we convert negative numbers to string it will be remove the negtive things and return only value
console.log(zero > 0) // false
console.log(zero < 0) // false
console.log(Object.is(zero, -0)) // -0 is equal to itself;
console.log(Object.is(zero, 0)) // false bcz -0 is not equal to 0;
console.log(zero === 0);
console.log(zero === -0);
console.log(zero == 0);
console.log(zero == -0);
console.log(Object.is(zero, 0));
console.log(Object.is(0, 0));
console.log(Object.is(zero, -0));