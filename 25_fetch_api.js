const URL = "https://cat-fact.herokuapp.com/facts"
let facts = document.querySelector(".fact-para")
let btn = document.querySelector("button")

let getData = async () => {
    console.log("getting data....");
    let promise = await fetch(URL);
    console.log(promise); // JSON format
    let data = await promise.json()
    for (d of data){
        facts.innerText += d.text + "\n"
    }
    
}

btn.addEventListener("click", getData)