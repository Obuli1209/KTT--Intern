console.log("************************ Class Basics **************************");
//class  - class is a template (create multiple instances or objects using this class)
// A class in JavaScript is a blueprint for creating objects with shared properties and methods.
// create multiple objects with the same structure/behavior.

class vehicles{                                           // create a class
    constructor(driverName,lorryBrand){                  //create constructor automatically when to use new keyword.
        this.driverName = driverName;
        this.lorryBrand = lorryBrand;
    }
    vehicleDetails(){
        console.log("Driver name: ",this.driverName);
        console.log("Lorry Brand: ",this.lorryBrand); 
    }
}

let vehicle1 = new vehicles("Dcode","Ashok Leyland");  //object create using new keyword
vehicle1.vehicleDetails();

let vehicle2 = new vehicles("srinath","TATA");  //object create using new keyword
vehicle2.vehicleDetails();


console.log("************************ Without Class **************************");

//without class creation

function User(name,email){              //constructor function
    this.name = name;
    this.email = email;
}
User.prototype.userDetails = function(){           //inherit the constructor function
    console.log("User Name: ",this.name);
    console.log("User email: ",this.email);
};

let u = new User("John","john@gmail.com");        //object creation
u.userDetails();



console.log("************************ Class Expression **************************");
// to define a class just like a function expression
//class is assigned to a variable
// usecase - When you don’t need to reuse the class name

let Person = class{             //class expression(class assignt the person variable)
    constructor(name){this.name = name;}
    details(){console.log("Person details: ",this.name);
    }
}
let person1 = new Person("Obuli"); // create object on Person variable.
person1.details();
let person2 = new Person("Hari");
person2.details();

console.log("************************ Class using getters and setters **************************");
class Driver{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age ?? "Your are not elgible";
    }
    set name(driverName){
        this._name = driverName;
    }
    set age(driverAge){
        if(driverAge < 20){
            console.log("Your age is "+driverAge+" so, you are not elegible to drive the heavy vehicels...");
            return;
        }
        this._age= driverAge;
    }
}

let driver1 = new Driver("Arnald", 19);
console.log("Driver Name:", driver1.name);
console.log("Driver Age:", driver1.age);

let driver2 = new Driver("Jacky", 27);
console.log("Driver Name:", driver2.name);
console.log("Driver Age:", driver2.age);

console.log("************************ Class Inheritance **************************");
// child class access the methods and properties on parent class using extends keyword.

class Vehicle{                              //parent class
    constructor(brand,modal,type){
        this.brand = brand;
        this.modal = modal;
        this.type = type;
    }
    showVehicleDetails(){
        console.log(`Vehcile Details: ${this.brand} ${this.modal} ${this.type}`);
    }
}

class Drivers extends Vehicle{            //child class
        constructor(brand,modal,type,driverName,age,licenseNumber){
            super(brand,modal,type);      //access the parent constructor
            this.driverName = driverName;
            this.driverAge = age;
            this.licenseNumber = licenseNumber;
        }   
        showDriverDetails(){
            console.log(`Driver Name: ${this.driverName}`);
            console.log(`Driver Age: ${this.driverAge}`);
            console.log(`License Number: ${this.licenseNumber}`);
        }
        showFullDetails(){
            this.showVehicleDetails();
            this.showDriverDetails();
        }
}

let driver3 = new Drivers("Ashok Leyland", "Ecomet", "Truck", "Arun Kumar", 35, "TN76 2023 00098");
driver3.showFullDetails();

console.log("************************ Class static properties and methods **************************");
//static - access by classname.staticmethod(), no object.
//normal - access by object method,  no classname.
class Driver1{
    static company = "Hatsun";                 //static 
    constructor(name){this.name = name;}
    static showDetails(){console.log("All drivers work under: ",Driver1.company);}    //static method
    named(){console.log("Driver Name: ",this.name);
    }
}
Driver1.showDetails();
let d1 = new Driver1("juli");
d1.named();
// d1.showDetails();              //It should be error.
console.log("Working company: ",Driver1.company); //access by classname and staticmethod.

console.log("************************ Private and Protected properties and methods **************************");
//Private method only accessed by inside of the class.
class Account {
    #balance = 0;                                 // private property
    constructor(owner) {this.owner = owner;}
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}.`);
      console.log(`New Balance: ₹${this.#balance}`);
    }
    #secretNote() {                               // private method
      console.log("Private note: Don't show this!");
    }
    showNote() {
      this.#secretNote(); 
    }
  }
  
  let acc = new Account("Obuli");
  acc.deposit(1000);       
  acc.showNote();         
  //acc.#balance;         // Private field '#balance' error.
  // acc.#secretNote();    // Error
  

console.log("************************ Extending built-in classess **************************");
//create own custom version.
//build-in classes - Array, Map, set, Date, Error, HTMLElement.
class MyArray extends Array{
    getFirst(){return this[0];}
    getLast(){return this[this.length-1];}
}
let arr = new MyArray(10,20,30,40,50);
console.log("first array value: ",arr.getFirst());
console.log("Last array value: ",arr.getLast());

console.log("************************ instanceOf operator **************************");
//The instanceof operator checks if an object is created from a specific class or not.
class Vehicle1 {} // let variablename = new Vehicle1() 
class Car extends Vehicle1 {}
let v = new Vehicle1();
let c = new Car();
console.log(v instanceof Vehicle1); // true 
console.log(c instanceof Car);     // true 
console.log(c instanceof Vehicle1); // true  (because Car extends Vehicle)
console.log(v instanceof Car);     // false 


console.log("************************ Mixin **************************");
//adds reusable behavior to a class without extending it.
//You want to share methods across unrelated classes
//You don’t want deep inheritance chains
let driverName = {
    wake(){console.log(this.name,"is wake");
    }
}
class Person1{
    constructor(name){
        this.name = name;
    }
}
Object.assign(Person1.prototype, driverName); //mixin the object into class
let p1 = new Person1("srinath");
p1.wake();