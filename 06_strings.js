// ############### Strings ###############

let str = "ApnaCollege"

console.log("str :",str);
console.log("0th index :",str[0]);
console.log("size :",str.length);
console.log("type :",typeof(str));


// ############### Teplate Literals ###############
// It is a way to have embedded expressions in string.
//  these are special type of string which can also contain  any variable using ${}
// these strings are enclosed in ``

let student = {
    name: "Sam Sunil",
    age: 24
}

// ############### String Interpolation ###############
// To create strings by doing substitution of placeholders
// ex: `string text ${expression} string text`
console.log(`My name is ${student.name}. I'm ${student.age} yrs old.`);


// ############### Additional String Methods ###############
console.log("to upper case :",str.toUpperCase())
console.log("to lower case :",str.toLowerCase())

let newStr = "     abcde afghij     "
console.log(newStr)
newStr = newStr.trim()
console.log("trim:",newStr)
console.log("slice:",newStr.slice(1, 3))
console.log("replace:",newStr.replace("a",1111))
console.log("replace all:",newStr.replaceAll("a",1111))
console.log("char at :",newStr.charAt(1))

//  by default string is immutable, therefor we cannot replace the string characters using their index
let s = "sam sunil"
s[0] = "r" // this will not change the actual string
console.log(s)
s = s.replace("s","r")
console.log(s)




