// New Keyword  => Create a brand new object , Link object to it.
// The new keyword even can invoke a function with a new empty object.
// The new keyord links that object to another object.


function MyBio(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    console.log(this);// this refer to object
}
const obj_1 = new MyBio("fayyazurrehman", 17, 100);

function FreindBoi(fname, fage, fsalary, brother) {
    this.fname = fname;
    this.fage = fage;
    this.fsalary = fsalary;
    this.brother = brother
}
const obj_2 = new FreindBoi("danish", 18, 150, obj_1);
console.log(obj_2);

function newfn(fname,lname){
   this.fname = fname;
   this.lname = lname;
//    console.log(this);
}
const obj_3 = new newfn("fayyaz","urrehman");
console.log(obj_3);