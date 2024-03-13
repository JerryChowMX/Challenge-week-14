const Sequelize = require('sequelize');
require('dotenv').config(); // This line is necessary if you're using dotenv to manage your database credentials

// Creates a connection to the database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306, // Default MySQL port is 3306
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );

module.exports = sequelize;
