//  What is try...catch?
// try...catch is used for error handling.
//It lets you "try" to run some code that might throw an error,if an error happens,
//  the catch block lets you handle it gracefully instead of crashing the program.

//why use try...catch?
//prevent code breaking if errors occured.
//show meaningful error message.
//handle unexpected situation (network issues, file not found.)
//debug more easily.

//where to use
//JSON parsing, fetching data from api, user inputs, external libraries, file I/O node.js

//when to use
//expect error occured, but it shouldnot crash whole app.
//dealing with external API.

//Why use throw
//stop execution when something goes wrong
//customize error message
//user firendly and bug free.

//finally block - always run
//error occur - try -> catch -> finally.
//no error - try -> finally.

console.log("****************** try and catch using JSON.parse ******************");

  let json = '{"driverName" : "Dcode", "age" : 30}';
  try{
    let user = JSON.parse(json);
    console.log(`The driver name is ${user.driverName} and age is ${user.age}`);
  }catch(err){
    console.log("Error:", err.name);
    console.log("Error:", err.message);
    console.log("Error:", err.stack);
  }
  

  console.log("****************** try and catch using throw ******************");
  let userName = "Dcode";
  let userPassword = 1235;
try {
  // lskdjfhjd
    if (userName !== "Dcode" || userPassword !== 12345) {
      throw new Error("Check user name or password!...");  // custom error message
    }
    console.log("You are logged in...");
  } catch (error) {
    console.log("Error:", error.name);
    console.log("Error:", error.message);
    console.log("Error:", error.stack);
  }

  console.log("****************** try catch and finally block ******************");

function driverDetails(details){
  try{
    if(!details.driverName || !details.licenseNumber){
      throw new Error("Driver info is incomplete...");
    }
    if(!details.hasLicense){
      throw new Error("Driver does not have a valid License...");
    }
    console.log(`${details.driverName} is allowed to drive.`);
  }catch(err){
    console.log(`Error: ${err.message}`);
  }finally{
    console.log("Driver check process completed...");
  }
}

let driver1 = {driverName : "Jaisurya", licenseNumber : "TN1234567", hasLicense : true};
let driver2 = {driverName : "Karthick", licenseNumber : "", hasLicense : false};
let driver3 = {driverName : "", licenseNumber : "TN1234567", hasLicense : true};

driverDetails(driver1);
driverDetails(driver2);
driverDetails(driver3);


console.log("****************** custom error and extend error ******************");
//built-in errors like TypeError, ReferenceError, or SyntaxError aren’t specific enough.
// create our own custom errors

//3
class paymentError extends Error{
  constructor(message){
    super(message);
    this.name = "Payment Error!";
  }
}

//2
function makePayment(paymentAmount,amountBalance){
  if(paymentAmount > amountBalance){
    throw new paymentError("Payment Failed: You have not enoughed balance...");
  }
  console.log("Payment successfull! Thank you for your purchase...");
}

//1
let paymentAmount = 1000;
let amountBalance = 500;
try {
  makePayment(paymentAmount,amountBalance);
}catch(err){
  console.log(`Error Name: ${err.name}`);
  console.log(`Error Message: ${err.message}`);
}finally{
  console.log("Transcation process completed...");
}