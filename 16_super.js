// Super Keyword in JS
// the super keyword is used to call the constructor of the parent class to access the parents properties and methods. 

// NOTE: when we have constructor defined in both the child and the parent class. We need to call the parent's constructor 
// before we initialise the properties(using this keyword) of the child class or exit the child's constructor using super().
class Person {
    constructor(name) {
        console.log("enter parent constructor");
        this.speciece = "homo sapiens"
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(name, branch) {
        console.log("enter child constructor");
        super(name); // to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }

    work() {
        super.eat() // to invoke the methods from the parent class
        console.log("solve problems, build something");
    }
}

let e1 = new Engineer("Sam Sunil", "Computer Science");