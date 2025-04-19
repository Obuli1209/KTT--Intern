// app.js
import { user, login } from './export-user.js';

console.log("Trying to log in...");

const user1 = login("obuli", "1234"); 
console.log(user1); 

// const user2 = login("wrongUser", "abcd"); 
// console.log(user2); 
