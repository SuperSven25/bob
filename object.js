/*
function Car(brand, model, year){
    this.brand = brand
    this.model = model
    this.year = year
}

var car1 = new Car ("Nissan", "GTR", "2019")

var car2 = new Car ("Audi", "R8", "2015")

class Bil {
    constructor(brand, model, year){
        this.brand = brand
        this.model =model
        this.year = year
    }
}

var car3 =new Bil("Nissan", "Skyline r34 GT-R", "2017")

console.log(car1)
console.log(car2)
console.log(car3)
*/
// 1
/*
class Bil {
    constructor(brand, model, year, name){
        this.brand = brand
        this.model =model
        this.year = year
        this.name = name
    }
}

let car1 = new Bil("Volvo", "s60", "2019", "Alex")

console.log(car1)

function Car(brand, model, year, name){
    this.brand = brand
    this.model = model
    this.year = year
    this.name = name
}

let car2 = new Car("Mercedes", "s63", "2021", "Svensson")

let car3 = {
    brand: "BMW",
    model: "i8",
    year: "2022",
    name: "Sven"
}

console.log(car2)
console.log(car3)
*/

//2 
/*

const cars = {
    car1:{brand:"volvo",model:"s60", year:"2019", name:"Alex"  },
    car2:{brand:"Mercedes", model:"s63", year:"2021", name:"Svensson"},
    car3:{brand:"BMW", model:"i8", year:"2022", name:"Svenpa"}
};

for (let car in cars) {
    console.log(`Det här är en ${cars[car].brand} ${cars[car].model} tillverkat år ${cars[car].year} och föraren heter ${cars[car].name}`);

};
*/

//3
/*
class Bil {
    constructor(brand, model, year, name){
        this.brand = brand
        this.model =model
        this.year = year
        this.name = name
    }
}

let car1 = new Bil("Volvo", "s60", "2019", "Alex")
let car2 = new Bil("Mercedes", "s63", "2021", "Svensson")
let car3 = new Bil("BMW", "i8", "2022", "Svenpa")

console.log(car1)
console.log(car2)
console.log(car3)
*/

//4

class Circle {
    constructor(radie) {
        this.radie = radie;
    }
    getArea() {
        return (3.14 * Math.pow(this.radie, 2)).toFixed(2);
    };
    getOmkrets() {
        return (2 * 3.14 * this.radie).toFixed(2)
    }
}

let cirkel = new Circle(2)

console.log(cirkel.getArea())
console.log(cirkel.getOmkrets())