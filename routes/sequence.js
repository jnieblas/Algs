const express = require('express');
const router = express.Router();

const sequence_controller = require('../controllers/sequenceController');

// Sequence calc home page route
router.get('/', sequence_controller.index);

// Sequence calc post route
router.post('/', sequence_controller.sequence_post);

module.exports = router;
