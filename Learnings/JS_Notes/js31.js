//function
function messaege(){console.log("Good Morning...")};
messaege();


// function methods -> 
// Function Declaration
// function expression or Anonymous Function
// Arguments
// Parameters
// Default parameters
// Rest parameters
// Returning values
// Arrow function



//hoisting
// 1.function declaration
great();
function great(){console.log("Have a Great day.");}

//2.function expression or anonymous function
let nice=function(){console.log("have a nice day.");};
nice();


// function- arguments and parameters
function person(name){
    console.log("Arguments and parameters: "+name);
}
person("Obuli"); // arguments passsed



//function - default parameters
function person1(name="Hari"){
    console.log("Default parameter: "+name);
}
person1(); // without arguments



//function - arguments and parameters and default parameters
function person2(name="Hari"){ //parameter and default parameter
    console.log("Arguments passed and default parameter: "+name);
}
person2("Obuli"); //argument passed



//function-rest parameter
//don't know how many parameters are passed . so, use array
function person3(...name){ // store in array format
    console.log("Formed in array: "+name);
}
person3("Obuli","Hari","vijay");


//funtion return
function person4(firstName,lastname){
    return (firstName+" "+lastname);
}
let fullName=person4("Obuli","Deva");
console.log("fullName is "+fullName);


//Arrow function is used return the anyone value.
let employee=(empFirstName,empLastname)=>("Arrow function: "+empFirstName+" "+empLastname);
let employeeDetails=employee("Obuli","Deva");
console.log(employeeDetails);