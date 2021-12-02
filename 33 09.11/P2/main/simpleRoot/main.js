const express = require('express');
const app = express();
const url = require('url');
const path = require('path');

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(5000);
console.log('server listening on port 5000');