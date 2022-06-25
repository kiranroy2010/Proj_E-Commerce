var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    Password:process.env.PASSWORD,
    database:process.env.DATABASE
});

con.connect(function(err){
    if (err) throw err;
    console.log("Database connected successfully!");
});

module.exports = con; 