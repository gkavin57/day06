//  task4
 class Uber{
    constructor (city, fare, customerName) {
        this.city = city;
        this.fare = fare;
        this.customerName  = customerName;
 
    }
        getFareCity(){
            return "fare for the City is " +  this.fare;
        }
 
}
 
let cityA = new Uber( "cityA", 500, "customer1");
let cityB = new Uber( "cityB", 300, "customer2");
 
console.log(cityA.getFareCity()); // 500
console.log(cityB.getFareCity()); // 300