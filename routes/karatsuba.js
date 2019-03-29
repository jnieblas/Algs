// karatsuba.js - Karatsuba's Alg route module

const express = require('express');
const router = express.Router();

const karatsuba_controller = require('../controllers/karatsubaController');

// Karatsuba calc home page route
router.get('/', karatsuba_controller.index);

// Karatsuba calc post route
router.post('/', karatsuba_controller.karatsuba_post);

// Efficiency analysis & details route
router.get('/details', function (req, res) {
    res.send('About Karatsuba\'s Algorithm');
});

module.exports = router;