var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var task = require('../models/task.js');

var router = express.Router();

router.get('../public/assets/css/styles.css', function(req, res){
  res.sendFile(__dirname + '/public/assets/css/styles.css');
});

router.get('/', function(req, res) {
  res.redirect('/tasks');
});

router.get('/tasks', function(req, res) {
  task.selectAll(function(data) {
    // handlebars object
    var hbsObject = {tasks: data};
    console.log(hbsObject);
    res.render('index', hbsObject);
  })
});


router.put('/tasks/update/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);

  task.updateOne('completed', true, 'id', id, function() {
    res.redirect('/tasks');
  });
});

router.post('/tasks/create', function (req, res) {
  console.log(req.body.name);
  task.insertOne('task', req.body.name, function() {
    res.redirect('/tasks');
  });
});

module.exports = router;