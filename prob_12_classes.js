/*
Qs. You are creating a website for your college. Create a class User with 2 properties, name & 
email. It also has a method called viewData() that allows user to view website data.
*/

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("name: ", this.name);
        console.log("email: ", this.email);
    }
}

let u1 = new User("Sam Sunil", "samsunil099@gmail.com")

/*
Qs. Create a new class called Admin which inherits from User. Add a new method called 
editData to Admin that allows it to edit website data.
*/

class Admin extends User {
    
    editData(name, email) {
        super.name = name;
        super.email = email;
        
        console.log("name after edit: ", this.name);
        console.log("email after edit: ", this.email);
    }
}

console.log("creating new admin:");
let a1 = new Admin("Shyam Sunil", "shyamsunil099@gmail.com")
a1.viewData()

console.log("editing the data of the admin:");
a1.editData("Sam Sunil", "samsunil099@gmail.com")