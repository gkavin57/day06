// task3
class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }
}
 
let person1 = new Person ("kavin", "kumar", 22);
console.log(person1.age);
console.log(person1.getFullName());