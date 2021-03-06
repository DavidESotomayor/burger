const mysql = require('mysql');
let connection;
if (process.env.JAWSDB_URL) {

  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Luna",
    database : 'burgers_db',
    port: 3306
  });
}

connection.connect( function(err) {
  if (err) throw err;
  console.log("Connected as Id: " + connection.threadId);
});

module.exports = connection;