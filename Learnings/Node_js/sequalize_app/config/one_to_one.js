// -> one to one relationship
// a row of one table is associated with single row of nother table.
// each record in one table has most one related record in  to antoher table.

// One User has one Profile. Each Profile belongs to one User.
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('student_details', 'postgres', '1209', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define models
const User = sequelize.define('User', { name: DataTypes.STRING });
const Profile = sequelize.define('Profile', { bio: DataTypes.STRING });

// Association
User.hasOne(Profile);
Profile.belongsTo(User);

// Test
(async () => {
  await sequelize.sync({ force: true });

  const user = await User.create({ name: 'Arun' });
  const profile = await Profile.create({ bio: 'Engineer', UserId: user.id });

  const result = await User.findOne({ where: { id: user.id }, include: Profile });
  console.log(result.toJSON());

  await sequelize.close();
})();




