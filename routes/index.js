var express = require('express');
var router = express.Router();

// GET home page
// Redirect index to a custom index location
router.get('/', function(req, res) {
  res.redirect('/algorithms');
});

module.exports = router;
