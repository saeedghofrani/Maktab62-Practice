const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(true);
});



app.listen(5000);
console.log('server listening on port 5000');