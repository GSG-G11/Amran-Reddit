const {join} = require('path');
const express = require('express');
const compression = require('compression')
const cookieParser = require('cookie-parser');

const {clientError, serverError} = require('./controllers')


const router = require('./routes')

const app = express();


app.set('PORT', process.env.PORT || 3000);


app.disable('x-powered-by');
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

app.use(clientError);
app.use(serverError);




module.exports = app;
