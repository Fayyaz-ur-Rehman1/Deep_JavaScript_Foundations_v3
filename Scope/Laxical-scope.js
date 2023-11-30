// Laxical Scope =>  // This is lexical scope it's goes to down words to up words and inner function can be check parent function values.
//  but parent function cannot be check inner function values.

function dada() {
    var dname = "Lukman";
    papa()
    function papa() {
        var fname = "saddiqurehman";
        child()
        function child() {
            var name = "fayyazurrehman";
            console.log(dname + " " + fname + " " + name);
        }
    }
}
dada()

let a = "Hello!";
function parent() {
    let b = "how are u";
    child()
    function child() {
        let c = "fayyazurrehman";
        chidchild()
        function chidchild() {
            var d = " danish";
            childchildchild()
            function childchildchild() {
                var e = "sahanawaz";
                childchildchildchild()
                function childchildchildchild() {
                    console.log(a + " " + b + " " + c + " " + d + " " + e);
                }
            }
        }
    }
}
parent()