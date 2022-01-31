console.log('Hello World');

enum Estado {
  Offline,
  Undefined,
  Online
};

let myStatus: Estado = Estado.Online;
console.log(myStatus);
for(let estat in Estado) {
  console.log(`This is one iteration. ${estat}`);
};


class Person {
  // properties
  private name: string;
  private lastName: string;
  private age:number;

  constructor(name: string, lastName: string, age: number){
    this.name     = name;
    this.lastName = lastName;
    this.age      = age;
  }
// get
public get myName(){
  return this.name;
};
public get myLast() {
  return this.lastName;
};
public get myAge() {
  return this.age;
};
// set
public set myName(name: string) {
  this.name = name;
};
public set myLast(lastName: string) {
  this.lastName = lastName;
};
public set myAge(age: number) {
  this.age = age;
};

// methods

public toString() {
  return `Hello, I am ${this.name} ${this.lastName} and I am ${this.age}`
}

};


const newPerson = (name: string, lastName: string, age: number): Person => new Person(name, lastName, age);
let personOne = newPerson('John', 'Wick', 49);
console.log(personOne.toString());
