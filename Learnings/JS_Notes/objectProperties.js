console.log("********************** Object Property Configuration ***********************");

//Object property configuration
//when you create an object, it change it, it looping it, it deleted it.
//Object.defineProperty() using this object property it control, lock, hide.
//this property provides three flags.
// writable - depends on (true or false) doesn't change the value.
//enumerbale - depends on (true or false) for in loop show or hide.
//configurable - depends on (true or false) property delete or not.
let user={
    name:"Dcode"
};
console.log("Before change: ",user.name);
Object.defineProperty(user,"name",{
    writable:false, // doesnot change value
    enumerable:true, // show in loop
    configurable:false, //no delete
});
user.name = "Jack"; // try to change the user name
console.log("After change: ",user.name);


console.log("********************** Object Property Descriptors ***********************");
//- Property flags and descriptors
console.log("Check what are the object property used: ",Object.getOwnPropertyDescriptor(user,"name"));


//sealing an object
console.log("Object.preventExtensions(obj) - no new, delete it, modify it");

  Object.preventExtensions(user);
  user.age = 22;
  console.log("Try to add new: ",user.age);
  user.name = "Obuli";
  console.log("Try to modify: ",user.name);
  delete user.name;
  console.log("Try to delete: ",user.name); 
  
console.log("Object.seal(obj) - no new, no delete, only modify it");
console.log("Object.freeze(obj) - no new, delete, modify.");

//check object status
console.log("Object.isExtensible(obj) - add new properties");
console.log("Check is extensible or not: ",Object.isExtensible(user));

console.log("Object.isSealed(obj) - no add, no delete");
console.log("Object.isFrozen(obj) - readonly.");


console.log("********************** Getter and Setter ***********************");

// -Property getters and setters
//getter - used to get data
//setter - used to set data
let driverDetails = {
    name : "Driver1",
    age : 32,

    get aged(){
        return this.age;
    },
    set aged(val){
        this.age = val;
    }
};
console.log("Before Getter and setter: ",driverDetails.aged);//getter
driverDetails.aged = 35;//setter
console.log("After Getter and setter: ",driverDetails.aged);//getter

console.log("********************** Prototype Inherit ***********************");

//Protoype Inherit -  every object has a hidden link to another object called its prototype.
// One object can use another object’s properties or methods.
let vehicle = {
    canMove : true,
    wheels : 6,
    start(){
        console.log("Vehicle has started");
    }
};
let lorry1 = {
    lorryMove : true,
    driverName : "Dcode",
    lorryServcie(){
        console.log("Lorry was serviced yesterday");
    },
    __proto__ : vehicle,
};

console.log("Driver name: ",lorry1.driverName);
lorry1.lorryServcie();
console.log("Lorry wheels: ",lorry1.wheels);
lorry1.start();
console.log("check lorry move: ",lorry1.canMove);

console.log("************* Inheritance works for in loop also **************");
for(let res in lorry1){
    console.log(res,":",lorry1[res]);
}

console.log("************* F.prototype **************");
//It is blueprint 

function Driver(name){
    this.name = name;
}
Driver.prototype.showId = function(){//showId is inherit from Driver
    console.log("Driver Name: ",this.name);
}
let driver1 = new Driver("Dcode");
driver1.showId();
let driver2 = new Driver("Obuli");
driver2.showId();

console.log("************* Native prototype **************");
//String.prototype example
let user1 = "Obuli";
console.log("String prototype: ",user1.toUpperCase());
//Array.prototype example
let arr = [1,2,3,4,5];
console.log("Array prototype: ",arr.includes(4));
//Function.prototype example
function great(){console.log("Function prototype");}
great.call();
//object.prototype example
let person = { name: "Obuli" };
console.log("Object prototype",person.hasOwnProperty("name"));


    

