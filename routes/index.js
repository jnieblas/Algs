var express = require('express');
var router = express.Router();

// Require controller modules
var index_controller = require('../controllers/indexController');
var calculators_controller = require('../controllers/calculatorsController');
var karatsuba_controller = require('../controllers/karatsubaController');

/// ALG ROUTES ///
// GET algs home page
router.get('/', index_controller.index);

// GET calcualtors index page
router.get('/calculators', calculators_controller.index);

// GET karatsuba index page
router.get('/calculators/karatsuba', karatsuba_controller.index);

module.exports = router;
