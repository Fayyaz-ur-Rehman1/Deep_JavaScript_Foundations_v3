// Dynamic Scope => in javascript perform theorically nt perform parctically that is called dynamic scope

function example() {
    const name = 'fayaz';
    console.log(name);
}
function example2() {
    const name = 'shanwaz';
    example() /// value => 'shanwaz'
}
example2()
// // dynamic scope

function example3() {
    const fname = "fayyaz";
    console.log(fname);
}
function example4() {
    const fname = "urrehman";
    example3()
}
example4()


// Dynamic Scope => in javascript dynamic scope work theorycally that is called dynamic scope

function dyfn1(){
    let name = "fayyaz";
    console.log(name);
}
function dyfn2(){
    let name = "danish"
     dyfn1()
}
dyfn2()