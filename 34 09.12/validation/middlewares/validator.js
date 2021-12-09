const validator = {};

validator.isNotEmpty = (elKey) => {
    return (req, res, next) => {
        if (!req.body[elKey]) {
            req.validate.isOK = false;
            req.validate.messages.push(`${elKey} does not exist.`);
        }
        next();
    };
};

validator.length = (elKey, lengthObj) => {
    return (req, res, next) => {
        if (
            req.body[elKey] &&
            (req.body[elKey].length > lengthObj.max ||
                req.body[elKey].length < lengthObj.min)
        ) {
            req.validate.isOK = false;
            req.validate.messages.push(
                lengthObj.min !== lengthObj.max ? 
                    `The length of ${elKey} must be between ${lengthObj.min} and ${lengthObj.max} characters.`:
                    `The length of ${elKey} must be ${lengthObj.min} digits`
            );
        }
        next();
    };
};

validator.isNumber = (elKey) => {
    return (req, res, next) => {
        if (
            req.body[elKey] &&
            isNaN(+req.body[elKey].slice(1, req.body[elKey].length))
        ) {
            req.validate.isOK = false;
            req.validate.messages.push(`${elKey} is not valid.`);
        }
        next();
    };
};

validator.isEmail = (elKey) => {
    return (req, res, next) => {
        const re = /\S+@\S+\.\S+/;
        if (req.body[elKey] && !re.test(req.body[elKey])) {
            req.validate.isOK = false;
            req.validate.messages.push(
                `${elKey} is not valid.`,
            );
        }
        next();
    };
};

module.exports = validator;
