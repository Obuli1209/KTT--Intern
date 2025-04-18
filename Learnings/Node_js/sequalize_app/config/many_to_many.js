const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('student_details', 'postgres', '1209', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define models
const Student = sequelize.define('Student', {
  name: DataTypes.STRING,
});

const Course = sequelize.define('Course', {
  title: DataTypes.STRING,
});

// Many-to-Many Association
// though keyword is sued for which table is connected between the two models.
Student.belongsToMany(Course, { through: 'StudentCourses' });
Course.belongsToMany(Student, { through: 'StudentCourses' });

(async () => {
  await sequelize.sync({ force: true });

  // Create a student
  const student = await Student.create({ name: 'Aruna' });

  // Create courses
  const [fullstack, appdevelopment] = await Course.bulkCreate([
    { title: 'Fullstack course' },
    { title: 'App development course' },
  ]);

  // Enroll student in courses
  await student.addCourses([fullstack, appdevelopment]);

  // Fetch student with enrolled courses
  const result = await Student.findOne({
    where: { id: student.id },
    include: Course,
  });

  console.log(JSON.stringify(result, null, 2));

  await sequelize.close();
})();
