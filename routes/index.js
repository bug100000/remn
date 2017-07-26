var express = require('express');
var router = express.Router();
var db = require('../collections/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.name);
  if(typeof (req.session.name) === 'undefined'){
    req.session.name = null;
  }
  console.log(req.session.name);
  res.render('index', { title: 'TodoList' , name: req.session.name });
});

router.post('/', function(req, res, next) {
  db.react.find("", function(err, data){
    res.json(data);
  })
});

module.exports = router;
