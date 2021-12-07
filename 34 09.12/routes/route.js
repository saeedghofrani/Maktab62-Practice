const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const usernameValidator = require('../middleware/username.js');



// parse application/x-www-form-urlencoded
// router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());
// router.use(express.json());
// router.use(usernameValidator);

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    console.log(`request was made: ${req.body}`);
    next();
});


router.use('/getUser', function (req, res) {
    res.write('asdfasdf');
    res.end();
});


module.exports = router;