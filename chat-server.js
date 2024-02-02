const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: false }));

router.get('/login', (req, res, next) => {
    res.send(`<form action="/chatapp" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="message" id="message">
    <input type="hidden" name="username" id="username"><br>
    <button type="submit">send</button>
    </form>`);
});

router.post('/', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, { flag: 'a' }, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Internal Server Error');
        }
        res.redirect('/chatapp')
    });
});

router.get('/', (req, res, next) => {
    fs.readFile('username.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = "no data";
        }
        data = data || "no data";
        res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" name="message" id="message">
        <input type="hidden" name="username" id="username"><br>
        <button type="submit">send</button>
        </form>`);
    });
});

app.use('/chatapp', router);
app.get('/', (req, res) => {
    res.redirect('/chatapp');
});

app.listen(3003);
