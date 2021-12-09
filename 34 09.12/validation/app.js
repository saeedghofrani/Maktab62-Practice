const express = require("express");

const path = require("path");

const validator = require(path.join(__dirname, "middlewares", "validator.js"));

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    req.validate = {
        isOK: true,
        messages: []
    };
    next();
})

app.post("/signup",
            validator.isNotEmpty("username"),
            validator.isNotEmpty("email"),
            validator.isNotEmpty("phoneNumber"),
            validator.length("username", {min: 3, max: 10}),
            validator.length("phoneNumber", {min: 11, max: 11}),
            validator.isNumber("phoneNumber"),
            validator.isEmail("email"),
            (req, res) => {
                if(req.validate.isOK) {
                    req.validate.messages = "All inputs are correct."
                    return res.json(req.validate);
                }
                res.json(req.validate)
            })


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})