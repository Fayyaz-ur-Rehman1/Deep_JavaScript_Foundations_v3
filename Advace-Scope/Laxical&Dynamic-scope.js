// laxical scope  =>  This is lexical scope it's goes to down words to up words and inner function can be check parent function values.
//  but parent function cannot be check inner function values.
// koi bi bhar vali ya koi bi outer value function kai ander access hu sakti hai but  function ki inner value function kai bhar acess nhai hu sakti
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