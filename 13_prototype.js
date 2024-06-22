  const student = {
    fullName: "Sam Sunil",
    marks: 94.4,
    printMarks: function() {
        console.log("marks = ", this.marks); // "this" keyword is used to point the current object 
    },
 }

// obj employee with method calcTax
 const employee = {
    calcTax() {
        console.log("employee : tax is 10%");
    }
 }

 const karanArjun = {
    salary: 50000,
 }

 
// Every object has a special type of proterty i.e. prototype. Which is used to inherit methods of one object from other objects
// obj1.__proto__ = obj2        --> obj1 inherits the method os obj2
 karanArjun.__proto__ = employee    
// ##############################################

// In the example below the obj karanArjun2 itself has the method calcTax() and its prototype also has the same method,
// the actual method in the object will be executed always

 const karanArjun2 = {
    salary: 80000,
    calcTax() {
        console.log("karanArjun2 : tas is 25%");
    }
 }

 karanArjun2.__proto__ = employee

 karanArjun2.calcTax()
 // ##############################################