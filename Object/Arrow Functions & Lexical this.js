const obj_1 = {
    name: "fayyazurrehman",
    age: 17,
    study: "12",
    obj_1_fn: function () {
        console.log(this); // this refer to own object give obj_1 
    }
}
obj_1.obj_1_fn()

const obj_2 = {
    name: "fayyazurrehman",
    age: 17,
    study: "12",
    obj_2_fn: () => {
        console.log(this); // this refer to global object mean window object beacuse this keyword use in arrow function then refer window object 
    }
}
obj_2.obj_2_fn()

function regularFn() {
    let username = "fayyaz"
    console.log(this);
    console.log(this.username);
}
regularFn()

let arrowFn = () => {
    let username = "fayyaz"
    console.log(this);
    console.log(this.username);
}
arrowFn()