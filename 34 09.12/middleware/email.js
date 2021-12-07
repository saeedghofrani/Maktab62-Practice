let emailValidation = (req, res, next) => {
    if (req.body.email) {
        let json_email = req.body.email;
        if (json_email.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            next();
        }
        else {
            res.write("email is invalid");
            next();
        }
    }
    else {
        res.write("email does not exist");
        next();
    }

};

module.exports = emailValidation;