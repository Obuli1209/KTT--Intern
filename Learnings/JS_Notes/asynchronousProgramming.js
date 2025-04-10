//promises - to handle the asynchornous operations.
// like waiting for data from a server, a file to load.

// A Promise has 3 states:
// Pending – Waiting for the result
// Resolve – The operation was successful
// Rejected – The operation failed

//why use promise?
//to avoid callback.

//when to use?
//API calls, Timers, File uploads, Database opertions, user input.

console.log("******************* Promises *********************");
//promise assign the variable
let tracking = new Promise((resolve,reject)=>{
    let track = true;
    if(track) resolve("Tracked");
    else reject("Untracked");
});
tracking.then((msg)=>{
    console.log("(Using variable) The vehicle is: ",msg);
})
tracking.catch((err)=>{
    console.log("(Using variable) The vehicle is: ",err);
});

console.log("******************* Function return the promise *********************");


//function return the promise
function track(){
    return new Promise((resolve,reject)=>{
        let isFuel = true;
        if(isFuel) resolve("Fuel is there...");
        else reject("No fuel...");
    });
}
track()
.then((msg)=>{
    console.log("(Using Function) Fuel available: ",msg);
})
.catch((err)=>{
    console.log("(Using Function) Fuel available: ",err);    
});

console.log("******************* Chaining promise *********************");

//chaining promise
function loadVehcile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isLoad = true;
            if(isLoad) resolve("Lorry loaded with goods.");
            else reject("Failed to load lorry.");
        },1000);
    });
}

function startTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isFuel = true;
            if(isFuel) resolve("Lorry started to trip.");
            else reject("No fuel! trip can't be started.");
        },1000);
    });
}

function reachDestination(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let roadClear = true;
            if(roadClear) resolve("Lorry reached the destination.");
            else reject("Roadblock!, can't reach the destination.");
        },1000);
    });
}


loadVehcile()
.then((msg)=>{
    console.log(msg);
    return startTrip();
})
.then((msg2)=>{
    console.log(msg2);
    return reachDestination();
})
.then((msg3)=>{
    console.log(msg3);
    console.log("Delivery successful!...");
})
.catch((err)=>{
    console.log("Error during delivery: ",err);
});


console.log("******************* Promise API *********************");
//promise.all() 
//wait for all succeed. if any one fail, totally fails.
let p1 =  Promise.resolve("Package 1");  
let p2 =  Promise.resolve("Package 2");  
let p3 =  Promise.reject("Package 3");  

Promise.all([p1,p2,p3])
.then((results)=>console.log("All delivered ",results))
.catch((err)=>console.log("Failed: ",err));
