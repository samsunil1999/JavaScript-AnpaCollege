// Async programing...
// here a default method called setTimeout() is used to hsow how async programing works

console.log("one");
console.log("two");

function hello() {
    console.log("hello");
}

// setTimeout() is used to execute any function after a particular timeperiod.
setTimeout(hello, 2000) // 2s = 2000ms

// setTimeout() runs asynchronously in JS e.i. lines which is written before and after the setTimeout() will not be effected.
setTimeout(() => {
    console.log("hello 2");
}, 2000)

console.log("three");
console.log("four");