// // An object is a collection of relative data and or functionlity
// // object store data in form of key and value
// // In same object we can store different type and value

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'Javaascript',
//     notes: {
//         introduction: "Welcome to JS Course"
//     },
//     enroll() {
//         console.log("you are sucessfully enrolled");
//     }
// }
// course.enroll()
// console.log(course.title);
// console.log(course);
// course.price = 9999; 

// // Factory function

// function createCourse(title){
//     return {
//         title : title,
//         objfn(){
//             console.log('you are sucessfully');
//         }
//     }
// }
// const course1 = createCourse('javascript');
// course1.objfn();
// console.log(course1.title); 


// // Constructor Function
// function Course(title){
//    this.title = title,
//    this.objfn1 = function () {
//     console.log('you are sucessfully run constructor function');
//    }
// }
// const course2 = new Course('javascript');
// course2.objfn1()
// delete course2.title;
// course2.newfnoutsideobj = function () {
//     console.log('i love to all indian people');
// }
// console.log(course2);
// course2.newfnoutsideobj();

// --------------Object nterview Question-----------
// What is Object?
// An object is a collection of relative data and or functionlity
// object store data in form of key and value
// In same object we can store different type and value

// How to Make Object
const obj1 = {}
const obj2 = new Object()
obj1.name = "fayyaz";
obj2.lname = "urrehman"
console.log(obj1);
console.log(obj2);

// Function inside Object

const obj3 = {
    fname: "danish",
    lnamefn: function () {
        console.log('chouhan');
    },
    innerobj: {
        study: "12th"
    }
}
obj3.lnamefn();
console.log(obj3.innerobj);

//  Add Property in Object
obj3.city = "india";
console.log(obj3);

//  Update Property in Object
obj3.fname = "fayyaz";
console.log(obj3);

// delete Property in Object
delete obj3.fname
console.log(obj3);

//  Tricks with Object
// hoisting concept
let key = "schoolName"
const obj4 = {
    name: "fayyaz",
    namefn: function () {
        return this.canname
    },
    ['country state ciy']: "india rajasthan jodphur",
    [key]: "Mulana abul kalam ajab Muslim se sec school"
}
obj4.canname = "lamborgini";
console.log(obj4.namefn());
// give space in property
obj4['pin code'] = "2847833";
console.log(obj4["country state ciy"]);
console.log(obj4[key]);
console.log(obj4);

// Sort Hand property in Object
let phone = 84785875847857;
let freind = "danish"
const obj5 = {
    phone,
    freind
}
console.log(obj5);

//  you can check properties here in object or not
console.log('freind' in obj5); // true beacuse freind name key exxist in object
console.log('name' in obj5); // false beacuse freind name key not exxist in object

// loop with Object
const obj6 = {
    name: "fayyaz",
    study: "12th",
    age: 17,
    schoolName: "Mulana abul kalam ajaz"
}
// for(itmes in obj6){
//     console.warn(itmes);
// }
// for(itmes in obj6){
//     console.warn(obj6[itmes]);
// }
for (itmes in obj6) {
    console.warn(`this is key : ${itmes} this is value ${obj6[itmes]}`);
}

// Sum of Object Value (A logical Question)

const obj7 = {
    fayyaz: 100,
    danish: 200,
    adnan: 300,
    uzair: 34,
}
let salary = 0;
for (itmes in obj7) {
    salary += obj7[itmes]
}
console.warn(salary);