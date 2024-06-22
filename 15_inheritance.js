// Inheritance
// Inheritance is passing down the properties and methods from parent class to child class.

// Note: (METHOD OVERRIDING) If the child class and the parent class have the same method then child's method will be used
class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {

}

let obj = new Child();
obj.hello() //obj of class Child can access the method hello which id method of class Parent


// ##################################################################

class Person {
    constructor() {
        this.speciece = "homo sapiens"
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("Do nothing, bcz I don't know what to do.");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

let personObj = new Person();
let samObj = new Engineer();