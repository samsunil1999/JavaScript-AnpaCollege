// Class in JS
// Class is a program-code template for creating objects.
// Those objects will have some state(variables) and behaviour(methods) in it.

class ToyotaCar {
    constructor(fuelType, mileage) { // this is a constructor function of the object, if no values are passed as parameter then the variable will be undefined
        console.log("creating new object of type ToyotaCar");
        this.FuelType = fuelType;
        this.Mileage = mileage
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setFuelType(fuelType) {
        this.FuelType = fuelType; // 'FuelType' is a variale of the object ToyotaCar
    }
}

let fortuner = new ToyotaCar("petrol", 18);
console.log(fortuner);
let lexux = new ToyotaCar("deisel", 22);
console.log(lexux);

// fortuner.setFuelType("petrol")
// console.log(fortuner);
