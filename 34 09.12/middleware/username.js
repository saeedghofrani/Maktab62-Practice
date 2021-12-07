let userNameValidation = (req, res, next, message) => {
    if (req.body.username) {
        let json_username = req.body.username;
        if (json_username.length > 3 && json_username.length < 11) {
            next();
        }
        else {
            res.write("the length of username must be between 3 and 10 characters");
            next();
        }
    }
    else {
        res.write("username does not exist");
        next();
    }

};

module.exports = userNameValidation;