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

// GET request for creating karatsuba
router.get('/karatsuba/create', karatsuba_controller.karatsuba_create_get);

// POST request for creating karatsuba
router.post('/karatsuba/create', karatsuba_controller.karatsuba_create_post);

// GET request to delete karatsuba
router.get('/karatsuba/:id/delete', karatsuba_controller.karatsuba_delete_get);

// POST request to delete karatsuba
router.post('/karatsuba/:id/delete', karatsuba_controller.karatsuba_delete_post);

module.exports = router;