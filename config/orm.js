const connection = require('./connection')

const orm = {
  selectAll: function (tableName) { 
      const query = "SELECT * FROM ??"
      connection.query(query, tableName, function(err, results) {
          if (err) throw err;
          console.log(results);
      })
   },
  insertOne: function (tableName, burgerName, devoured, nameValue, devouredValue) { 
      const query = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
      connection.query(query, [tableName, burgerName, devoured, nameValue, devouredValue], function(err, results) {
          if (err) throw err;
          console.log(results);
      })
   },
  updateOne: function (tableName, columnToSearch, value) {
      const query = "UPDATE ?? SET ?? = ?";
      connection.query(query, [tableName, columnToSearch, value], function (err, results) {
          if (err) throw err;
          console.log(results);
      })
  }
}

module.exports = orm;