// Function scoping in JavaScript means that variables declared inside a function are only accessible within that function. If you declare a variable inside a function, you can't use it outside of that function. It's like a box where you keep things, and those things are only available inside the box, not outside.
// JavaScript में फंक्शन स्कोपिंग का मतलब है कि जो कुछ भी आप फंक्शन के अंदर डिक्लेयर करते हैं, वह केवल उसी फंक्शन के अंदर ही एक्सेस किया जा सकता है। अगर आप किसी फंक्शन के अंदर एक वेरिएबल को डिक्लेयर करते हैं, तो आप उसे उस फंक्शन के बाहर नहीं उपयोग कर सकते। इससे तुलना करें तो यह एक डिब्बा है जिसमें आप चीजें रखते हैं, और वे चीजें केवल उस डिब्बे के अंदर ही उपलब्ध हैं, बाहर नहीं।
function exampleFunction() {
    // Variable declared inside the function
    var localVar = "I am a local variable";
    // Accessing the local variable inside the function
    console.log(localVar);
}
// Attempting to access localVar outside the function will result in an error
//   console.log(localVar); // This would cause an error
// Calling the function to see the output
exampleFunction(); // Output: "I am a local variable"


function fn1() {
    let a = "fayyazurrehman";
    console.log(a);
}
// console.log(a); give error beacuse outside the block
fn1()