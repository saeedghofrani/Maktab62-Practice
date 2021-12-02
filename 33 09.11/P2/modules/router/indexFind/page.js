const express = require('express');
const app = express();
const url = require('url');
const path = require('path');
const router = express.Router();


let page = (index, dirName) => {
    console.log('page func');
    path.join(dirName, `../../pages/${index}/index.html`);
};

// page = {
//     '/index1' : '../../pages/index1/index.html'
//     '/index2' : '../../pages/index2/index.html'
//     '/index3' : '../../pages/index3/index.html'
//     '/index4' : '../../pages/index4/index.html'
//     '/index5' : '../../pages/index5/index.html'
// };

module.exports = page;