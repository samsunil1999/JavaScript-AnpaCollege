// Callback Hell OR Pyramid of Doom
/*
Callback Hell: Nested callback stacked under one another forming a pyramid structure.

This style of code becomes difficult to understand & manage.
*/
function getData(data, getNextData) {

    setTimeout(() => {
        console.log("data ", data);
        if (getNextData) {
            getNextData()
        }
    }, 2000);
}

// I need to get data 1 then 2 then 3 then 4 synchronously with a delay of 2 seconds
getData(1, () => {
    console.log("getting Data 2.....");
    getData(2, () => {
        console.log("getting Data 3.....");
        getData(3, () => {
            console.log("getting Data 4.....");
            getData(4)
        })
    })
})