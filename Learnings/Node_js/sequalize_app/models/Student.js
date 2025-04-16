
//Create the table from database
const { DataTypes } = require('sequelize');
const student_details = require('../config/sequalize');

const Student = student_details.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rollNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING
  }
});

async function checkTableAdd(){
  try{
    await Student.sync();
    console.log("Student table created or already exists.");
  }catch(err){
    console.log("Error creating table: ",err.message);
  }
}
checkTableAdd();
module.exports = Student;


