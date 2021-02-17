const connection = require('../config/connection')

const orm = {
  selectAll: function (tableName, cb) { 
      const query = "SELECT * FROM ??"
      connection.query(query, tableName, function(err, results) {
          if (err) throw err;
          cb(results);
      })
   },
  insertOne: function (tableName, burgerName, devouredValue, cb) { 
      const query = "INSERT INTO ?? (??) VALUES (?)";
      connection.query(query, [tableName, burgerName, devouredValue], function(err, results) {
          if (err) throw err;
          cb(results);
      })
   },
  updateOne: function (tableName, columnToSearch, devouredBoolean, value, cb) {
      const query = `UPDATE ${tableName} SET ${columnToSearch} = ${devouredBoolean} WHERE ${value}`;
      connection.query(query, [tableName, columnToSearch, devouredBoolean, value], function (err, results) {
          if (err) throw err;
          cb(results);
      })
  },
  deleteOne: function (tableName, value, cb) {
    const query = `DELETE FROM ${tableName} WHERE ${value}`;
    connection.query(query, function (err, results) {
        if (err) throw err;
        cb(results);
    })
  }
}

module.exports = orm;