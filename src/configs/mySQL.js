const mySQL = require("mysql");

const db = mySQL.createConnection({
  // Setting DB
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
});

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Database Connected from mysql 01");
// });

module.exports = db;
