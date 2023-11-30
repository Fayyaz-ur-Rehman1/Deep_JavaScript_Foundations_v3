// laxical scope  =>  This is lexical scope it's goes to down words to up words and inner function can be check parent function values.
//  but parent function cannot be check inner function values.

function fn1() {
    let a = "hello";
    fn2()
    function fn2() {
        let b = "I";
        fn3()
        function fn3() {
            let c = "am";
            fn4()
            function fn4() {
                let d = "fayyaz";
                fn5()
                function fn5() {
                    let e = "urrehman";
                    fn6()
                    function fn6() {
                        let f = "i";
                        fn7()
                        function fn7() {
                            let g = "leave";
                            fn8()
                            function fn8() {
                                let h = "in";
                                fn9()
                                function fn9() {
                                    let i = "rajasthan";
                                    fn10()
                                    function fn10() {
                                        let j = "jodphur"
                                        console.log(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j}`);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} 
fn1()

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