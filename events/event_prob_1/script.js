let body = document.querySelector("body")
let modeBtn = document.querySelector("#mode");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark"
        modeBtn.textContent = "Light mode"
        modeBtn.classList.add("btn-dark")
        body.classList.add("body-dark")
    }else {
        currentMode = "light"
        modeBtn.textContent = "Dark mode"
        modeBtn.classList.remove("btn-dark")
        body.classList.remove("body-dark")
    }
    console.log("mode changed to ", currentMode);
})