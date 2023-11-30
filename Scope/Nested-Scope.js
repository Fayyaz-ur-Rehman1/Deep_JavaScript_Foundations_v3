var n = 'fayyaz'
function fn4() {
    var n = 'rehman'
    fn5('fayyaz')
    function fn5(v) {
        console.log(n, v)
    }
}
fn4()

var name = 'adnan'
function fn1() {
    var name = 'fayyaz'
    fn3('khilji')
    function fn3(lname) {
        console.log(name, lname)
    }
}
fn1()

var a = 'fayyaz'
function fn() {
    var b = 'adnan'
    fn2('chouhan')
    function fn2(c) {
        fn3("fayyazurrehman")
        function fn3(d) {
            console.log(a, b, c, d);
        }
    }
}
fn()