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