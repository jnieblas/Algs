const express = require('express');
const router = express.Router();

const branch_bound_controller = require('../controllers/branchBoundController');

// B&B calc home page route
router.get('/', branch_bound_controller.index);

// Sequence calc post route
router.post('/', branch_bound_controller.branch_bound_post);

module.exports = router;
