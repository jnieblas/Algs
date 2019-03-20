// karatsuba.js - Karatsuba's Alg route module

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
    res.send('Karatsuba\'s Algorithm');
});

// Efficiency analysis & details route
router.get('/details', function (req, res) {
    res.send('About Karatsuba\'s Algorithm');
});

module.exports = router;