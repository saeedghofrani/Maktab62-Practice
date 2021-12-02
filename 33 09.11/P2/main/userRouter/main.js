const express = require('express');
const app = express();
const url = require('url');
const path = require('path');
const aboutMe = require(path.join(__dirname, '../../modules/router/user/user.js'));

app.use('/user', aboutMe);

app.listen(5000);
console.log('server listening on port 5000');