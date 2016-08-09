var connection = require('./connection.js');

var orm = {
  selectAll: function(table, cb) {
    var queryString = 'SELECT * FROM ' + table;
    connection.query(queryString, function(err, result) {
      console.log(result);
      cb(result);
    });
  },

  insertOne: function(table, column, value, cb) {
    var queryString = 'INSERT INTO ' + table + ' (' + column.toString() + ') VALUES (?)';
    console.log(queryString);
    connection.query(queryString, [value], function(err, result) {
      if (err) throw err;
      console.log('result: ' + result);
      cb(result);
    });
  },

  updateOne: function(table, column, value, whereColumn, equalsX, cb) {
    var queryString = 'UPDATE ' + table + ' SET ' + column + '=' + value + ' WHERE ' + whereColumn + '= ?';
    connection.query(queryString, [equalsX], function(err, result) {
      console.log(result);
      cb(result);
    });
  }
}

module.exports = orm;