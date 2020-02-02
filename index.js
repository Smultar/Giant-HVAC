const express = require('express');
const app = express();
const https = require('https')
const bodyParser = require('body-parser');

let port = require('./config.json').port || 3000;
app.set('port', port);

const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(session({
    name: `DELTA-ARMORY`,
    secret: 'DA-SM-05',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: true,
        maxAge: 604800000,
    }
}));

require('./router')(app);

app.listen(port, () => console.info(`Listening on port ${port}`));