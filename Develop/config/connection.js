
const Sequelize = require('sequelize');

require('dotenv').config();
console.log(process.env) // remove this after you've confirmed it is working


const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
