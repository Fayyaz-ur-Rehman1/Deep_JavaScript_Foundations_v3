// Prefix_increment => the increment operator increments and returns the value after incrementing 
let pre1 = 10;
console.log(++pre1);// 11
let pre2 = 10; 
console.log(--pre2);//9

// Postfix_increment => the increment operator increments and returns the value before incrementing. 

let post1 = 10;
console.log(post1++);//10
console.log(post1);//11
let post2 = 10;
console.log(post2--);//10
console.log(post2);//9

// // // practice post&prefix
// //1}
let x1 = 10;
let y1 = ++x1 + x1-- + ++x1;
console.log(y1); // 33
// // 2}
let x2 = 5;
let y2 = x2++;
console.log(y2);//5
// 3}
let x3 = 5;
x3 += 1;
console.log(x3);
x3 = 5;
x3++;
console.log(x3);
// // 4}
let x = 5;
// Prefix Increment (++x)
console.log(x); // 5
console.log(++x);//6
console.log(x); // 6
// // Postfix Increment (x++)
console.log(x);//6
console.log(x++);//6
console.log(x);//7
// // Prefix Decrement (--x)
console.log(x);//7
console.log(--x); //6
console.log(x);//6
// // Postfix Decrement (x--)
console.log(x);//6
console.log(x--);//6
console.log(x);//5

let a = 5;
let b = 10;
console.log(a, b);//5,10
let result1 = ++a + b--; // 6 + 10
let result2 = a-- - --b; // 6 - 8

console.log(result1);//16
console.log(result2);// -2

console.log(a, b);

let j = '5';
j = j + 1
console.log(j);

let k = '5';
++k
console.log(k);

let l = '5';
l++
console.log(l);