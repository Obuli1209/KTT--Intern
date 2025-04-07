
console.log(
    "***********************  Recursion  ****************************"
  );
  //recursion - function calls itslef.
  //smaller sub problems.
  //HMTL Dom tree traversal, simple mathematical problems.
  
  //factorial
  function fact(n){
    if(n === 1) return n;
    return n * fact(n-1);
  }
  console.log("Recursive function: ",fact(5));
  
  
  
  console.log(
    "***********************  Recursive Traversal  **************************"
  );
  //Recursive traversal - visiting each node in nested structure  and calls itself.
  //Used in tree, DOM Manipulates.
  
  let user =  {
    name: "Obuli",
    location:{
      city:"salem",
      coordinates:{
        lat: 11.6643,
        lng: 78.1460
      }
    },
    interests : ["coding","Music","Travel"],
  }
  function traverse(obj){
    for(let key in obj){
        const value = obj[key];
        if(typeof value === 'object' && value != null && !Array.isArray(value)){
            console.log("Object: ",key);
            traverse(value);
        }
        else{
            console.log(`${key} : ${value}`);
        }
    }
  }
  traverse(user);

  console.log(
    "***********************  Rest Parameters  **************************"
  );
  //rest parameter - must be end
  function showDetails(driverName , lorryBrand , ...details){
    console.log("Driver Name: ",driverName); 
    console.log("Lorry Brand: ",lorryBrand); 
    console.log("Details1: ",details); 
  }
  showDetails("Dcode","Ashok Leyland","Tyre changed","sensors working well");



  //Nested function and Lexical Environment - all variables defined in functions 
  //  a reference to its outer environment.

  function outer(){
    let name = "Obuli";
    function inner(){
        console.log("Lexical Environment: ",name);
    }
    inner();
  }
  outer();

  //Global object
  var lorry1 = "Ashok Leyland";
  console.log("Var used in both alert and window.alert");
//   alert(lorry1);
//   window.alert(lorry1);

let lorry2 = "TATA";
console.log("Let used in only alert");
//alert(lorry2);







// function tables(n,l){
// if(n>l) return;
// console.log(2*n);
// return tables(n+1,l);

// }
// tables(1,10);



  
