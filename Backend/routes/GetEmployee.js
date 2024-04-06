var express = require('express');
var router = express.Router();

/* GET employee listing. */
router.get('/', function(req, res, next) {
  res.send('respond from Get Employee');
});

module.exports = router;
