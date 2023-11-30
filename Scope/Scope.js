// Scope => isse apnko sepration of code milta hai kai hamarai code ko seprate kr sake or sath me hm particular code ko osi jagaha use kare or on variable ko vahi tak simit rakhai taki memory eluction bi cam hu or hamare resource bi km utilizze kare or output bi otna hi ayai acce se isliyai apn scope use mai lete hai 

//  Global Scope => jo bi variable apn bhar bana rahai that is called global scope like apnne function kai bahr variable banaya ya block scope kai bhar variable banaya that is called global scope 
//  and apm jabbi var keyword use mai laite hai tab vo attech hu jata hai window object kai sath 
var name = 'fayyazurrehman'; // yai jayai global context kai pass
function global() {  // or oske bad ek new exucation context bana ek particular function kai ander oska name jiska name tha global
    var mark = 70; // yai jayaiga memory elucation kai pas fir code exucation hova kuc nhi mila
    // console.log(name); // yai jayaiga code exucation kai pas
}
global()
// console.log(mark); // memory call  bahr agayi  jesi hi hamra variable hai vo destroy ho gaya destory hone kai bad apn osko acces karenge tu fir vo error denga

// -----------

// Local Scope =>   scope se same name variable two variable ko alag alag tarikai se acces kr sakte hu  alag alag value kai sath kiu ki exucation context bi alag alag hai 

function firt() {
    // local scope 1
    var x = 1;
    console.log(x);
    function childfirst() {
        var x = 2;
        console.log(x);
    }
    childfirst()
}
firt()

// Block Scope => ap curly brases kai ander code likhte hai oska scope that is called block scope 

var a = 1;
{
    var a = 10;
    console.log(a);
}
console.log(a);

let b = 1;
{
    let b = 10;
    console.log(b);
}
console.log(b);

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

