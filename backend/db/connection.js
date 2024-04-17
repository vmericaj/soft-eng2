const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'softeng' 
});

connection.connect((err) => {
    if(err){
        console.log("error connecting to the database");
    }
});

module.exports = connection;