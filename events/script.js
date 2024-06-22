// WAYS OF EVENT HANDLING
// 1. Inline handling
// 2. using event handler functions
// 3. event Listeners

let btn1 = document.querySelector("#btn1");
// all the event handlers can have evet object as the parameter which 
// will have all the information about the event
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log("you just clicked the button");
};

let btn2 = document.querySelector("#btn2");

// double click even handler for btn2
btn2.ondblclick = () => {
    console.log("btn2 was clicked 2x");
}

let div = document.querySelector("#div1");

// mouseover even handler for div
div.onmouseover = () => {
    console.log("you are inside the div");
}

// EVENT HANDLING using event listeners
// NOTE: Using the eventListeners we can listen to multiple events on the same element
let div2 = document.querySelector("#div2");

div2.addEventListener("click",(evt) => {
    console.log("you just clicked the div2");
    console.log("event type: ",evt.type);
    console.log("event target: ",evt.target);
})

div2.addEventListener("mouseover", (evt) => {
    console.log("you are hovering over div2");
    console.log("event type: ",evt.type);
})

// Remove event handler function
const handlerFunc = () => {
    console.log("this is handler 3");
}

div2.addEventListener("click", handlerFunc)

div2.removeEventListener("click", handlerFunc)

