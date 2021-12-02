const express = require('express');
const app = express();
const url = require('url');
const path = require('path');
const page = require('../../modules/router/indexFind/page.js');
pathname = url.pathname;

app.get('/:index', function (req, res) {
    console.log(req.params['index']);
    // res.send(`userName: ${req.params.userName}`);
    // page(req.params['index'])
    // try {
    //     res.send(page(__dirname , req.params['index']));
    // } catch (error) {
    //     console.log(error + 'send');
    // }
    // res.send(page( 'index3', __dirname ));
    res.send(page());
});

app.listen(5000);
console.log('server listening on port 5000');