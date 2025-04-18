// -> One to many realationship
// one user can write many posts.
// ex: one insta user have many blog posts.
// works in eager load.

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('student_details', 'postgres', '1209', {
  host: 'localhost',
  dialect: 'postgres',
});

// Models
const User = sequelize.define('User', {
  name: DataTypes.STRING,
});

const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
});

// One-to-Many Association
User.hasMany(Post);     // One user -> many posts
Post.belongsTo(User);   // Each post -> one user

(async () => {
  await sequelize.sync({ force: true });

  // Create a user
  const user = await User.create({ name: 'Prabhu' });

  // Create posts for that user
  await Post.bulkCreate([
    { title: 'First Post', UserId: user.id },
    { title: 'Second Post', UserId: user.id },
  ]);

  // Fetch user with posts
  const result = await User.findOne({
    where: { id: user.id },
    include: Post, // Eager load posts
  });

  console.log(JSON.stringify(result, null, 2));

  await sequelize.close();
})();
