var orm = require('../config/orm.js');

var task = {
  selectAll: function (cb) {
    orm.selectAll('tasks', function() {
      cb(res);
    });
  }
}