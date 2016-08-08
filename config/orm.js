var connection = require('./connection.js');

var orm = {
  selectAll: function(table) {
    var queryString = 'SELECT * FROM ' + table;
    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  },

  insertOne: function(table, column, value) {
    var queryString = 'INSERT INTO ' + table + ' (' + column + ') VALUES (' + value + ')';
    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  },

  updateOne: function(table, column, value, whereColumn, equalsX ) {
    var queryString = 'UPDATE ' + table + ' SET ' + column + '=' + value + ' WHERE ' + whereColumn + '= ?';
    connection.query(queryString, [equalsX], function(err, result) {
      console.log(result);
    });
  }
}

module.exports = orm;