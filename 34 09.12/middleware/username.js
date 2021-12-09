const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let response;
router.use('/', function(req, res, next) {
    if (req.body.username) {
        let json_username = req.body.username;
        if (json_username.length > 3 && json_username.length < 11) {
            response += "is OK";
        }
        else {
            response =+ "the length of username must be between 3 and 10 characters";
        }
    }
    else {
        response += "username does not exist";

    }
    next(response);
});

module.exports = router;