var express = require('express');
var router = express.Router();

// Require controller modules
var algorithms_controller = require('../controllers/algorithmsController');
var karatsuba_controller = require('../controllers/karatsubaController');

/// ALG ROUTES ///
// GET algs home page
router.get('/', algorithms_controller.index);

// GET karatsuba index page
router.get('/karatsuba', karatsuba_controller.index);

module.exports = router;