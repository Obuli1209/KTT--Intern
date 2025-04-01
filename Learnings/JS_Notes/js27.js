//variables

var a=10;//function scope
console.log(a);
{
    var a=5;
    console.log(a);
}
console.log(a);

let b=2;//block scope
console.log(b);
{
    let b=4;
    console.log(b);
}
console.log(b);

const c=25;//block scope
console.log(c);
{
    const c=35;
    console.log(c);
}
console.log(c);


//hoisting
// 1.function declaration
great();
function great(){console.log("Have a Great day.");}

//2.function expression
let nice=function(){console.log("have a nice day.");};
nice();

//use strict mode - check the erros strictly.
function call(){
    // "use strict";
    let user="Obuli";
    console.log(user);
}
call();

//alert() interaction
// alert("Welcome to our website!");

//prompt() interaction
// let name = prompt("What is your name?");
// alert("Hello, " + name + "!");

//confirm() interaction
// let confirmAction = confirm("Do you want to proceed?");
// if (confirmAction) {
//     alert("You clicked OK!");
// } else {
//     alert("You clicked Cancel!");
// }

//Type conversion

//Implicit conversion-automatic conversion
//convert to string
console.log("5" + 3); // "53" (Number 3 converted to String)
console.log("5" + true); // "5true" (Boolean converted to String)

//convert to number
console.log("5" - 2); // 3 ("5" converted to Number)
console.log("10" * "2"); // 20 (Both converted to Numbers)
console.log("5" - true); // 4 (true → 1, so 5 - 1 = 4)

//convert to boolean
console.log(5 > 2); // true
console.log(0 == false); // true (0 is false in boolean)
console.log("" == false); // true (Empty string is false)


//Explicit conversion-Manula conversion
//convert to string
let num = 10;
console.log(String(num)); // "10"
console.log(num.toString()); // "10"

//convert to number
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN (Not a Number)
console.log(parseInt("123px")); // 123
console.log(parseFloat("3.14test")); // 3.14

//convert to boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false


//Basic operators
console.log("Arithmetic operator: + - * % / ** ++ --");
console.log("Assignment operator: = += -= *= %= /=  **=");
console.log("Comparison operator: ==  ===  !=  !==  >  <  >=  <=");
console.log("logical operator: &&  ||  !");
//                             AND OR XOR  NOT LS RS
console.log("Bitwise operator: &  ||  ^  ~  <<  >>");

//Maths Objects
//Absolute value
console.log(Math.abs(-5)); //5

//ceil value- high value
console.log(Math.ceil(4.7)); //5

//floor value- low value
console.log(Math.floor(4.7)); //4

//round value
console.log(Math.round(4.5)); //5

//max value
console.log(Math.max(10,20,30)); //30

//min value
console.log(Math.min(10,20,30)); //10

//sqrt value
console.log(Math.sqrt(25)); //5

//power value
console.log(Math.pow(2,3)); //8

//random value- 0 to 1
console.log(Math.random()); 

//trunc value-> remove decimal
console.log(Math.trunc(4.7)); //4

//sign value-> return 1,0,-1
console.log(Math.sign(-4)); //-1

//
console.info("This is an info message.");

console.warn("This is a warning message.");

console.error("This is an error message.");


