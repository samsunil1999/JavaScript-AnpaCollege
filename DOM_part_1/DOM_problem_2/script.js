let btn = document.createElement("button")

btn.style.backgroundColor = "red"
btn.style.color = "white"
btn.innerText = "Click Here!"

let firstDiv = document.querySelector("#div_1")
firstDiv.before(btn)

let para = document.querySelector(".para")
// para.setAttribute("class", "newClass")
para.classList.add("newClass")