const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fke0MDsozliv83ckDLS",
  database: "groupomania",
});

module.exports.getDB = () => {
  return db;
};