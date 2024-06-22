/*
For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
*/

let price = [250, 645, 300, 900, 50]
console.log(`price : ${price}`)

for (i=0; i<price.length; i++) {
    price[i] *= 90/100;     
}

console.log(`price after discounting: ${price}`)