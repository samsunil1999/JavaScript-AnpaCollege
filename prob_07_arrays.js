/*
Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(companies)

console.log("Remove the first company from the array")
companies.shift()
console.log(companies)

console.log("Remove Uber & Add Ola in its place")
companies.splice(1,1,"Ola")
console.log(companies)

console.log("Add Amazon at the end")
companies.push("Amazon")
console.log(companies)

