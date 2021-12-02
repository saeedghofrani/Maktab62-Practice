const express = require('express');
const app = express();
const url = require('url');
const path = require('path');

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname,'../../pages/practiceTwoPage/index.html'));
});
app.get('/css/style.css', (req, res) => {
    return res.sendFile(path.join(__dirname,'../../pages/practiceTwoPage/css/style.css'));
});
app.get('/js/main.js', (req, res) => {
    return res.sendFile(path.join(__dirname,'../../pages/practiceTwoPage/js/main.js'));
});
app.get('/download.jpg', (req, res) => {
    return res.sendFile(path.join(__dirname,'../../pages/practiceTwoPage/js/main.js'));
});

app.listen(5000);
console.log('server listening on port 5000');