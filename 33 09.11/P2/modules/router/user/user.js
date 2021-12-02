const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/about', function(req, res) {
    res.send('about');
});
router.get('/me', function(req, res) {
    res.send('me');
});

module.exports = router;