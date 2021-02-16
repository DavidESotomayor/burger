const connection = require('./connection')

const orm = {
  selectAll: function (tableName, cb) { 
      const query = "SELECT * FROM ??"
      connection.query(query, tableName, function(err, results) {
          if (err) throw err;
          cb(results);
      })
   },
  insertOne: function (tableName, burgerName, devoured, nameValue, devouredValue, cb) { 
      const query = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
      connection.query(query, [tableName, burgerName, devoured, nameValue, devouredValue], function(err, results) {
          if (err) throw err;
          cb(results);
      })
   },
  updateOne: function (tableName, columnToSearch, value, cb) {
      const query = "UPDATE ?? SET ?? = ?";
      connection.query(query, [tableName, columnToSearch, value], function (err, results) {
          if (err) throw err;
          cb(results);
      })
  }
}

module.exports = orm;