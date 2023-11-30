// toString : In JavaScript, the toString method is a built-in method that is available on almost all objects. It is used to convert an object to a string representation. The specific behavior of toString can vary depending on the type of object, and in many cases, you can override this method to provide a custom string representation for your objects
var x = 10;
var b = x.toString();

console.log(typeof b)

const num = new Number(20)
console.log(num.toString());
console.log(typeof num)

const obj = {} // when we use toString on an object it will be return primitive value with string hint.
console.log(obj.toString());

const num1 = 42;
console.log(num1.toString()); // "42"

const str1 = "Hello, World!";
console.log(str1.toString()); // "Hello, World!"

const obj1 = { key: "value" };
console.log(obj1.toString()); // "[object Object]"

const array = [1, 2, 3];
console.log(array.toString()); // "1,2,3"

// Question: Create an object with a custom toString method that returns a string representation of the object.

const customObject = {
    name: "John",
    age: 25,
    toString: function () {
        return `${this.name} (Age: ${this.age})`;
    }
};

console.log(customObject.toString()); // Expected output: "John (Age: 25)"

// Question: Customize the toString method of an array to return a comma-separated list of its elements.

const customArray = [1, 2, 3];
customArray.toString = function () {
    return this.join(', ');
};

console.log(customArray.toString()); // Expected output: "1, 2, 3"

// Question: Implement an inheritance scenario where a subclass must provide its own toString method.

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    toString() {
        return `${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    // Implement a toString method for Car
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.toString()); // What is the expected output for the Car class?

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}
class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue);
    }
    addNode(parentValue, childValue) {
        const newNode = new TreeNode(childValue);
        this.findAndAddNode(this.root, parentValue, newNode);
    }
    findAndAddNode(node, parentValue, newNode) {
        if (node.value === parentValue) {
            node.children.push(newNode);
        } else {
            for (const child of node.children) {
                this.findAndAddNode(child, parentValue, newNode);
            }
        }
    }
    toString() {
        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);
            if (node.children.length > 0) {
                queue.push(...node.children);
            }
            if (queue.length === 0 && node.children.length > 0) {
                result.push('\n');
                queue.push(...node.children);
            }
        }
        return result.join(' ');
    }
}
const myTree = new Tree("Root");
myTree.addNode("Root", "Child1");
myTree.addNode("Root", "Child2");
myTree.addNode("Child1", "Grandchild1");
myTree.addNode("Child2", "Grandchild2");
console.log(myTree.toString());