const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

app.use('/api', authRoutes);

sequelize.sync().then(() => {
  console.log('DB synced');
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Server running on http://localhost:${process.env.PORT || 3000}`)
  );
});
