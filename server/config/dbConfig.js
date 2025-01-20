const mysql = require('mysql2');
require('dotenv').config();
const urlDB = 'mysql://root:AeqtfMrjtGwyhEWJXvdyPGsRwKczzEay@mysql.railway.internal:3306/railway'
const db = mysql.createConnection({
  urlDB
});


db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

module.exports = db;
