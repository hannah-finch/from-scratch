const Sequelize = require('sequelize');

const sequelize = new Sequelize (
  "todo_app_db",
  "postgres",
  "hannarue",
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)

module.exports = sequelize;