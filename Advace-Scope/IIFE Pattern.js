// IIFE => Immediately Invoked Function Expression iife ko hm data privite rakhne ke liyai use mai laite hai or dusra yai hai ki apko kisi pe depended nhai rahana hu vo autometic call hu jayai mean ke koi page ko refresh kare tu vo autoetic call hu jayai iife ko grouping opreator kai ander rakhte hai 

function fn1(){
    let a = "fayyazurrhman";
    console.log(a);
}
fn1();

// (function iifefn(){
//     let b = "fayyaz";
//     console.log(b);
// })
// ()

(function iifefn1(name){
    console.log(`my name is fayyazurrehman`);
})()