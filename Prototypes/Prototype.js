const obj1 = {
    name: "fayyaz",
    getName: function () {
        return this.name
    },
    getRoll: function () {
        return this.roll
    }
}
const obj2 = {
    roll: 1,
    name: "danish",
    __proto__: obj1
}
// console.log(obj2);
const obj3 = {
    class: "BCA",
    name : "adnan",
    __proto__: obj2
}
console.log(obj3.getName());

const object = {};
console.log(object);

const array = ['fayyaz'];
console.log(array);

const object1 = new Object();
console.log(object1);

const array1 = new Array();
console.log(array1);

const string1 = new String();
console.log(string1);