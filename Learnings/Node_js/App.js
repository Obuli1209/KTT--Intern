// -> Node js
// Node js is a runtime environment executing the javascript code outside of the browser.
// It provides set of built in modules for working with file system,
// networking, cryptography, and other systeme resources.
// this modules used for wide range of applications, web servers, API command tools and desktop applications.
// Libuv(c++) - cross platform library used in node js because it provides event loop, asynchronous I/O, event-driven.
// Modular architecture - ecosystem friendly install third party modules using npm.

// -> working
// request send(file read)->doesn't wait for result -> continue other process -> file read is complete , callback is fired and handle result.

// -> What Can Node.js Do?
// Node.js can generate dynamic page content
// Node.js can create, open, read, write, delete, and close files on the server
// Node.js can collect form data.
// Node.js can add, delete, modify data in your database

// -> key features of node js
// Asynchronous and event-driven.
// NPM(node package module) - over 3.1 million packages.
// single programming language -  both client and server side used.
// single threaded with event loop - handle many requests without create multiple threads.
// cross platform.

//our js code(100%) -> node js(50% js, 50% c++) -> (v8 engine) (libuv library 100% c++)

// It is javascript runtime environment, event-driven, asynchronous 
// Node.js has a set of built-in modules.
// javascript runtime means do the functions like button onclick.
// do work outside the browser using node js
// possible to create one webserver.
// use chrome browser inside of V8 engine(c++) code.
// this v8 engine take js code into native machine code.
// browser didnot allow to access the file system because of hacking.
// so node js used to browser with incluidng modules use file systems.
// node js use v8 engine including with some modules and change used.
// file system modules, OS, http modules.

// -> usecases
// web applications - rest api, server side rendering.
// real time applications - chat app.
// single page applictions.


// -> history
// 2009 - Ryan Dahl
// 2010 - NPM
// current - v23.11.0 on april 1 2025.

// -> Event loop
// Node.js runs on a single-threaded event loop to handle multiple client requests without creating multiple threads.
// Instead of waiting it move to next task. operation is done, it used to event queue and handle via callback.

// -> Non-blocking I/O
// Non-blocking I/O means it doesn't stop the program while waiting for the operation to complete.

// -> Asynchronous programming - ex: get user details from database.
// callbacks, promises, async/await.

// -> Strems and buffers
// streams - the length of videos into chucks - bit by bit of file.
// buffer - working with binary data like images, videos.


console.log("*********** Promises**************");
const fs1 = require('fs').promises;
console.log("Start reading file");
fs1.readFile('../Node_js/message.txt','utf8')
.then((data)=>{
  console.log("Promises File content: ",data);
})
.catch((err)=>{
  console.log("Error reading file",err);
});
console.log("Server can handle other requests...");





console.log("*********** OS Modules **************");

const os = require('os');

// Get OS platform
console.log('Platform:', os.platform());

// Get OS type
console.log('OS Type:', os.type());

// Get CPU Info
console.log('CPU Info:', os.cpus());

// Get Free Memory
console.log('Free Memory (bytes):', os.freemem());

// Get Total Memory
console.log('Total Memory (bytes):', os.totalmem());

// Get System Uptime
console.log('System Uptime (seconds):', os.uptime());

// Get User Info
console.log('User Info:', os.userInfo());

//Get Home Directory
console.log('Home Directory:', os.homedir());





console.log("*********** Async/await **************");
const fs2 = require('fs').promises;
async function readFile(){
  try{
    const data = await fs2.readFile('../Node_js/message.txt','utf8');
    console.log("Async/Await File content: ",data);
  }
    catch(err){
      console.log("Error rendering file: ",err);
  }
}
readFile();





console.log("*********** Buffer **************");

const fs3 = require('fs');
fs3.readFile('../HTML Notes/brand-1.jpg', (err, data) => {
  if (err) throw err;
  console.log('This is a Buffer:', data);
  console.log('Size of buffer:', data.length, 'bytes');
});



// reading file

console.log("***************** Reading File using fs.readFile ***************");
const fs = require("fs");
console.log("User sent a message...");
fs.readFile('../Node_js/message.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log("Event loop Message content: ", data); 

  setTimeout(() => {
    console.log("Notification sent to a receiver");
  }, 1000);
});

console.log("Server can handle other requests...");



console.log("***************** Reading File using fs.createReadStream ***************");
const fs4 = require("fs");
const stream = fs4.createReadStream('../Node_js/largeMessage.txt','utf8');
stream.on('data',(chunk)=>{
  console.log("New chunk: ",chunk);
});
stream.on('end',()=>{
  console.log("Finished to read");
});
stream.on('error',(err)=>{
  console.log("Error occured: ",err);
});

