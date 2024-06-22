/*
Prompt the user to enter their full name. generate a username for them based in the input.
Start username with @, followed by their full name and ending with the fullname length.

Ex: user name = "samsunil", username should be "@samsunil8"
*/

let Name = prompt("Please enter username :");

let nameArray = Name.split(" ");
let nameWithoutSpace = "";
for (let val of nameArray) {
    nameWithoutSpace = nameWithoutSpace.concat(val)
}

console.log(`Generated username : @${nameWithoutSpace.toLowerCase()}${nameWithoutSpace.length}`);