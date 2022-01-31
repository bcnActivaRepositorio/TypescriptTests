console.log('Hello World');
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Undefined"] = 1] = "Undefined";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
;
let myStatus = Estado.Online;
console.log(myStatus);
for (let estat in Estado) {
    console.log(`This is one iteration. ${estat}`);
}
;
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    // get
    get myName() {
        return this.name;
    }
    ;
    get myLast() {
        return this.lastName;
    }
    ;
    get myAge() {
        return this.age;
    }
    ;
    // set
    set myName(name) {
        this.name = name;
    }
    ;
    set myLast(lastName) {
        this.lastName = lastName;
    }
    ;
    set myAge(age) {
        this.age = age;
    }
    ;
    // methods
    toString() {
        return `Hello, I am ${this.name} ${this.lastName} and I am ${this.age}`;
    }
}
;
const newPerson = (name, lastName, age) => new Person(name, lastName, age);
let personOne = newPerson('John', 'Wick', 49);
console.log(personOne.toString());
