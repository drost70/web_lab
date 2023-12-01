require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: DB_USER,
  password: DB_PASSWORD,
  database: "web_node_db",
});

module.exports = pool;
