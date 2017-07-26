var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../collections');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('register', {title: 'register'});
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    var user = new db.react({
      name: req.body.name,
      password: hash
    });
    user.save((err, data) => {
      console.log("chenggong");
      res.json({
        result: "OK"
      })
    });
  });

});

module.exports = router;
