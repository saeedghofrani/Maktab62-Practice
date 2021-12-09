"use strict";

const express = require('express');
const { fsyncSync, fstatSync } = require('fs');
const router = express.Router();
const path = require('path');
const users = require('../../data/users.json');

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.post('/login', (req, res) => {
    if (!req.body.username.trim() || !req.body.password || !req.body.email || !req.body.firstname || !req.body.lastname) {
        res.send("invalid input");
    }
    else {
        users.push({...req.body});
    }
});

module.exports = router;