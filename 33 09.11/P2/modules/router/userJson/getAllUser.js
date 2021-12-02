const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/getAllUser', function(req, res) {
    res.sendfile(path.join(__dirname, '../../../pages/getAllUser/users.json'));
});

module.exports = router;