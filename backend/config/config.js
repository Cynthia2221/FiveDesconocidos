require('dotenv').config();

const config = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
};

const env = process.env.NODE_ENV || 'development';

module.exports = config[env];
