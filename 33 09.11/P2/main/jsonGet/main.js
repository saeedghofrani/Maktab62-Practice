const express = require('express');
const app = express();
const url = require('url');
const path = require('path');
const getAllUser = require(path.join(__dirname, '../../modules/router/userJson/getAllUser.js'));


app.use('/admin', getAllUser);

app.listen(5000);
console.log('server listening on port 5000');