const express = require('express');
const app = express();
const usernameValidator = require('./middleware/username.js');
const phoneNumberValidation = require('./middleware/phoneNumber.js');
const emailValidation = require('./middleware/email.js');

app.use(express.json());
app.use(usernameValidator());
app.use(phoneNumberValidation);
app.use(emailValidation);

app.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    console.log(`request was made: ${req.body.username}`);
    next();
});

app.use('/getUser', function (req, res) {

    res.end();
});


app.use((req, res, next) => {
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
        return res.send('not found',
            (err) => {
                err ? next(err) : console.log('Sent:', '404page');
            });
    }
    // respond with json
    if (req.accepts('json'))
        return res.send({ error: 'Not found' });
    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(3000, (err) => {
    err ? console.log(err) : console.log(`server listening at http://localhost:${3000}`);
});