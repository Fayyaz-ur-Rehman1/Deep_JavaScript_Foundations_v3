// Kyle simpson says that you should use let only with loops.
// we should use right tool with the right way.
// if something is blocked scope then use let whether is something function scope you should use var.
//use let for block scoope because it is exactly for blocked scopes.

// Variables declared with 'var' in javascript are function scoped 
// Variable declared with "let & const" are blocked scoped.
   
function fn1(love){
    if(love){
        let fname = "fayyaz";
        const lname = "urrehan";
        console.log(`my name is ${fname} ${lname}`);
    }
    // console.log(`my name is ${fname} ${lname}`); give error beacuse let and const are blocked scope not function scope
}
fn1(true)


function fn2(love){
    if(love){
        var fname = "fayyaz";
        var lname = "urrehan";
        console.log(`my name is ${fname} ${lname}`);
    }
    console.log(`my name is ${fname} ${lname}`); // wirte give value beacuse var is functional scope we are use any palace in function beacuse this is function scope
}
fn2(true)