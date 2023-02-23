// get the client
const mysql = require('mysql2');
const json2xls = require('json2xls');
const fs = require('fs')
const path = require('path')
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'proyectoweb'
});

// simple query
connection.query(
  'SELECT * FROM `empleados`',
  function(error, results) {
    if(error){
        console.log(error.sqlMessage)
    }else{
        console.log(results)
        const xls = json2xls(results)
        fs.writeFileSync(path.join(__dirname,'data.xlsx'),xls,'binary')
    }
  }
);
connection.end()