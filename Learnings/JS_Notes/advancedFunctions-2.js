//setTimeout
//setInterval
//clearInterval



//setTimeout -run a function after a certain amount of time has passed 
function msg(){
    console.log("SetTimeout: Hii, Obuli.");
}
setTimeout(msg,1000);

//setInterval - repeatedly calls a function or executes a code snippet, with a fixed time delay 
// function msg2(){
//     console.log("SetInterval: Welcome to our company");
// }
// setInterval(msg2,1000);

//clearInterval - a method used to stop the setInterval or setTimeout function from executing.
let count=0;
let interval = setInterval(()=>{
    count++;
    console.log("This is used in clearInterval method. Count is ",count);
    if(count === 5){
        clearInterval(interval);
        console.log("Stopped after 5 times");
    }
},1000);