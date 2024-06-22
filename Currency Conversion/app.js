const BASEURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const amount = document.querySelector(".amount input");

const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

(async function () {
    let URL = BASEURL+"usd.json"
    let response = await fetch(URL)
    let data = await response.json();
    let exchange_rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let amtVal = amount.value; 
    msg.innerText = `${amtVal} ${fromCurr.value} = ${amtVal * exchange_rate} ${toCurr.value}`
})();


const updateMsg = async () => {
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;
    }
    
    let URL = BASEURL +fromCurr.value.toLowerCase() +".json"
    let response = await fetch(URL)
    let data = await response.json();
    let exchange_rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    msg.innerText = `${amtVal} ${fromCurr.value} = ${amtVal * exchange_rate} ${toCurr.value}`
};

for (let select of dropdowns) {
    for (currencyCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if (select.name === "from" && currencyCode === "USD") {
            newOption.selected = "selected"
        }
        if (select.name === "to" && currencyCode === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault(); // this is to prevent the action to perform for the particular event
    updateMsg()
})

window.addEventListener("load", () => {
    updateMsg()
})