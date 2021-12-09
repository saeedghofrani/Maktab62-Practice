const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use('/', function(req, res, next) {
    if (req.body.phoneNumber) {
        let json_phoneNumber = req.body.phoneNumber;
        if (json_phoneNumber.length > 11 || json_phoneNumber.length < 11) {
            res.write("phone number must be 11 digit");
            next();
        }
        else if (json_phoneNumber.match(/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/g)) {
            next();
        }
        else {
            res.write("phone number is invalid");
            next();
        }
    }
    else {
        res.write("phone number does not exist");
        next();
    }
});
module.exports = router;