// create crud_operation database

// // import sequelize model
// const { Sequelize } = require('sequelize');

// // Create a Sequelize instance for connecting to the default database
// const sequelize = new Sequelize('postgres://postgres:1209@localhost:5432/postgres', {
//   dialect: 'postgres',
// });

// (async () => {
//   try {
//     // Connect to the default PostgreSQL database
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');

//     // Create a new database
//     await sequelize.query('CREATE DATABASE crud_operation');
//     console.log('Database crud-operation created successfully!');

//     // Close the connection
//     await sequelize.close();
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();


// crud_operation
import { Sequelize, DataTypes } from 'sequelize';
const sequelize1 = new Sequelize('crud_operation', 'postgres', '1209', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define the User model -> model means table
const User = sequelize1.define('User', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
});



// Bulk creation
// sequelize1.sync()
// .then(async () => {
//     await User.bulkCreate([
//       { name: 'Arun', age: 25 },
//       { name: 'Kavi', age: 28 },
//       { name: 'Ravi', age: 21 },
//       { name: 'Priya', age: 30 }
//     ]);
//     console.log('Multiple users added!');
//   });


// single creation
// sequelize1.sync()
// .then(async()=>{
//     await User.create({name:"Maadhini",age:22});
//     console.log("One user added");
// });

// output
// User.findAll()
// .then(users=>{
//     console.log("All users");
//     console.log(users.map(user=> user.toJSON()));
// });

// Total crud operation
// (async () => {
//   await sequelize1.sync({ force: true });

//   // 1. Create
//   const user = await User.create({ name: 'Maadhini', age: 25 });
//   console.log('Created:', user.toJSON());

//   // 2. Read (Find One)
//   const foundUser = await User.findOne({ where: { name: 'Maadhini' } });
//   console.log('Found:', foundUser.toJSON());

//   // 3. Update
//   const [affectedRows] = await User.update({ age: 23 }, { where: { name: 'Maadhini' } });
//   console.log(`${affectedRows} row(s) updated.`);

//   // 4. Delete
//   const deletedCount = await User.destroy({ where: { name: 'Maadhini' } });
//   console.log(`${deletedCount} row(s) deleted.`);

//   await sequelize1.close();
// })();


// findAll method - return as array so map used 
const foundUser1 = await User.findAll();
console.log("Found all user: ", foundUser1.map(user => user.toJSON()));

// // findBypk method
// const foundUser2 = await User.findByPk(14);
// console.log("Found user by primary key: ", foundUser2.toJSON());

// // destroy method
// const deletedCount = await User.destroy({ where: { id: [7,8,9,10,12,13] } });
// console.log("Number of users deleted:", deletedCount);

