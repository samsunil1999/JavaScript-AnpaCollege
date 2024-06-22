/*
Create a function using the "function" keyword tht takes a string as an argument & 
returns the number of vowels in the string.
*/

function countVowels(str) {
    let count = 0;
    let lowerStr = str.toLowerCase()
    for (char of lowerStr) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    console.log("String :", str);
    console.log("vowel count :", count);

}




// Create an arrow function to perform the same task
var getVowelCount = (str) => {
    let count = 0;
    let lowerStr = str.toLowerCase()
    for (char of lowerStr) {
        if (char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
            count++;
        }
    }
    console.log("String :", str);
    console.log("vowel count :", count);
};
