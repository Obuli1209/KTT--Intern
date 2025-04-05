//string array
let arr=["Obuli","Hari","Dhanush","Panneer"];
for(let val of arr){
    console.log("String Array Iteration: ",val);
}

//character array
let str="Obuli";
for(let val of str){
    console.log("Character Iteration: ",val);
}


console.log("***************************Map******************************");

// Map- It is collection of keyed data types, it allows keys of any types.
// new Map() -  create a map
// map.set(key,value) - store the value by key
// map.get(key) - return the value by key
// map.keys() - return iterable key
// map.values() - return iterable values
// map.entries() - return both key and value
// map.delete(key) - delete the key and value
// map.size() - check size of the map
// map.has(key) - check the key is available or not
// Object.entries - convert object to map
// Object.fromentries() - convert map to object



// new map()
let map = new Map();
//map.set(key,value)
map.set("1","It is a string key");
map.set(1,"It is a number key");
map.set(true,"It is a boolean key");
//map.get(key)
console.log("String key: ",map.get("1"));
console.log("Number key: ",map.get(1));
console.log("Boolean key: ",map.get(true));

//create map
let lorryDetails = new Map([
    ["fuelPrice",2000],
    ["tyrePrice",5000],
    ["waterService",2000]
]);

//map.key()
for(let key1 of lorryDetails.keys()){
    console.log("Only key: ",key1);
}

//map.values()
for(let val1 of lorryDetails.values()){
    console.log("Only values: ",val1);
}

//map.entries()
for(let ent1 of lorryDetails.entries()){
    console.log("Both key and values: ",ent1);
}

lorryDetails.forEach((value,key)=>{
    console.log(key,value);
});


//map.size
console.log("check LorryDetails size: ",lorryDetails.size);

//map.has(key)
console.log("Check the key is available or not: ",lorryDetails.has("tyrePrice"));


let lorryDetails1 = {
    fuelPrice1 : 2000,
    tyrePrice1 : 5000,
    waterService1 : 2000,
}
lorryDetails1.lorryprice1=20_00_000;


console.log("****************Convert Object to Map*******************");
//Object.entries - convert object to map
let map1 = new Map(Object.entries(lorryDetails1));
console.log("FuelPrice1: ",map1.get("fuelPrice1"));
console.log("TyrePrice1: ",map1.get("tyrePrice1"));
console.log("WaterService1: ",map1.get("waterService1"));
console.log("LorryPrice1: ",map1.get("lorryprice1"));

//add another key value in map
map1.set("lorryRunning",true);
console.log("Check lorryrunning or not: ",map1.get("lorryRunning"));

//delete the lorryprice
map1.delete("lorryprice1");
console.log("Delete LorryPrice1: ",map1.get("lorryprice1"));

console.log("****************************Convert map to object************************");

//Object.fromentries - convert map to object
let obj= Object.fromEntries(lorryDetails);
console.log("Convert map to Object: ",obj);


console.log("****************************Set****************************");

//set - “collection of unique values” (without keys)
//set.add() - add the values in set
//set.delete() - delete the value in set
//set.has() - check available or not
//set.clear() - clear the entire set
//set.size - check the set size.

let drivers = new Set();
drivers.add("Driver1");
drivers.add("Driver2");
drivers.add("Driver3");
drivers.add("Driver4");
console.log("check added  values: ",drivers);

//delete() method
drivers.delete("Driver3");
console.log("After delete: ",drivers);

//has() method - check available or not
console.log("check available or not: ",drivers.has("Driver2"));

//size - check set size
console.log("Check the size of set: ",drivers.size);

//Itertion over set
let lorries = new Set(["Lorry1","Lorry2","Lorry3","Lorry4"]);
for(let lorry of lorries){
    console.log("Iteration set using for of loop: ",lorry);
}

console.log("*****************************weakmap****************************");

//WeakMap - keys must be objects.
//weakmap.set(obj)
//weakmap.get(obj)
//weakmap.has(obj)
//weakmap.delete(obj)
let obj1 = {}; 
let weakmap = new WeakMap();
weakmap.set(obj1,["Obuli","Hari"]);
console.log("Weakmap: ",weakmap.get(obj1));  


console.log("*****************************weakset****************************");
//WeakSet - keys must be objects, each object can only appear once(No duplicates).
//weakset.add(obj)
//weakset.delete(obj)
//wekaset.has(obj)
let user1 = { name: "Obuli" };
let user2 = { name: "Hari" };
const loggedInUsers = new WeakSet();
loggedInUsers.add(user1);
loggedInUsers.add(user2);
console.log("Weakset user1: ",loggedInUsers.has(user1)); // true
user1 = null;
// loggedInUsers.delete(user1);
console.log("Weakset user1: ",loggedInUsers.has(user1)); // false
console.log("Weakset user2: ",loggedInUsers.has(user2)); // true


let sample = new Set();
sample.add("Obuli");
sample.add("Dhanush");
sample.add("Panneer");
sample.add("Obuli");
for(let val of sample){
console.log(val);
}

let mapex = new Map();
mapex.set(1,"driver1");
mapex.set(2,"driver2");
mapex.set(3,"driver3");
mapex.set(4,"driver4");
// for(let val1 of mapex){
//     console.log(mapex.get(val1));
// }
console.log(mapex.get(1));  
