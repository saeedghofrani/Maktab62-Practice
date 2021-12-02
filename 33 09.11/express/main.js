const express = require('express');
const app = express();
const path = require('path');
console.log(__dirname);
console.log(__filename);

// for router 
//const router = express.Router();
//router.get('/create', function(req, res) {
// res.send('article created succesfully);   
//})
//module.exports = router

app.use('article', article)
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});
app.get('/', (req, res) => {
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello, World!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});
app.get('/login', (req, res) => {
    return res.send('helloooooooooooooooooooooooooooo');
});
app.get('/register', (req, res) => {
    return res.send('registerrrrrrrrrrrrrrrrrrrrrrrrrrrr');
});
app.get('/test', (req, res) => {
    res.send(path.join(__dirname, '../../32 09.05/page/Saeed/page.html'))
    return res.sendFile(__dirname + '../../32 09.05/page/Saeed/page.html');
});


app.listen(5000);
console.log('server listening on port 5000');