const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:1209@localhost:5432/authentication_autherization');

module.exports = sequelize;
