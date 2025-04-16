// -> Sequalize
// sequalize is a popular object relatinal mapping(ORM) library in node.js
// Sequelize is a promise-based Node.js
// It provides abstract layer in database.
// To interact with databases using JavaScript objects instead of writing raw SQL queries.
// This makes easier CRUD operation in database.
// Intermediate of oops and relational dattabse.

// -> Features
// Database agnostic - supports mysql, postgresql, sqlite, microsoft sql.
// easy to use for CRUD opertaion.
// built in data validation
// Migrations

// -> benefits
//  to work with JavaScript models and methods, eliminating manual SQL queries.

// -> Model in sequelize
// Model is a blueprint or template of the table in your database.



//connect with sequelize and database
const {Sequelize} = require('sequelize');
//                             db_name   default_name   password
const details = new Sequelize('student_details','postgres','1209',{
  host:'localhost',
  dialect:'postgres'
});

async function checkConnection(){
  try{
    await details.authenticate();
    console.log("Connection successfully.");
  }catch(err){
    console.log("Unable to connect: ",err.message);
  }
}
checkConnection();
module.exports = details;



//insert the data in the table
const details_get = require('../config/sequalize');
const tables_get = require('../models/Student');

async function startApp(){
  try{
    await details_get.authenticate();
    console.log("Connected to database");

    await details_get.sync();
    console.log("Connected to the tables");
    
    const students = await tables_get.bulkCreate([
      {
        name: 'Maadhini',
        rollNumber: 'ECE001',
        department: 'ECE',
        email: 'maadhini@kit.edu.in',
        phone: '9876543210'
      },
      {
        name: 'Arjun Das',
        rollNumber: 'ECE002',
        department: 'ECE',
        email: 'arjun@kit.edu.in',
        phone: '9876543211'
      },
      {
        name: 'Priya Ramesh',
        rollNumber: 'CSE003',
        department: 'CSE',
        email: 'priya@kit.edu.in',
        phone: '9876543212'
      },
      {
        name: 'Karthik M',
        rollNumber: 'MECH004',
        department: 'Mechanical',
        email: 'karthik@kit.edu.in',
        phone: '9876543213'
      }
    ]);
    console.log("Students data inserted");
    students.forEach(s => {
      console.log(s.toJSON());
    });
  }
  catch(err){
    console.log("Error occured: ",err);
  }
}

startApp();



// create new student data
// await students.create({
//   name: ' Obuli M',
//   rollNumber : 'ECE003',
//   department: 'ECE',
//   email: 'obuli@kit.edu.in',
//   phone: '0000000000'
// });