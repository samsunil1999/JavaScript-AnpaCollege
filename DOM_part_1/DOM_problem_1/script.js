// document.querySelector("h2").innerText += " from Apna College students"

let h2 = document.querySelector("h2");

h2.innerText += " from Apna College students";


let box = document.querySelectorAll(".box")
for (i = 0; i<box.length; i++){
    box[i].innerText = `New unique value ${i+1}`
}
