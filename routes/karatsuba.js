const express = require('express');
const router = express.Router();

const karatsuba_controller = require('../controllers/karatsubaController');

// Karatsuba calc home page route
router.get('/', karatsuba_controller.index);

// Karatsuba calc post route
router.post('/', karatsuba_controller.karatsuba_post);

module.exports = router;
