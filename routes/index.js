var express = require('express');
var router = express.Router();

const index_controller = require('../controllers/indexController');

// GET home page
// Redirect index to a custom index location
router.get('/', index_controller.index);

module.exports = router;
