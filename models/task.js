/*
Here is where you setup a model for how to interface with the database.
*/


var orm = require('../config/orm.js');

var task = {
  selectAll: function (cb) {
    orm.selectAll('tasks', function(res) {
      cb(res);
    });
  },

  insertOne: function(column, value, cb) {
    orm.insertOne('tasks', column, value, function(res) {
      cb(res);
    });
  },

  updateOne: function(column, value, whereColumn, equalsX, cb) {
    orm.updateOne('tasks', column, value, whereColumn, equalsX, function(res) {
      cb(res);
    });
  }
};

module.exports = task;