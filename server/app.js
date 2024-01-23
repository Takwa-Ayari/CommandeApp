var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection = require('./databaseConnection');
const cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

app.use('/api', indexRouter);

app.on('close', () => {
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL database connection: ' + err.stack);
            return;
        }
        console.log('MySQL database connection closed.');
    });
});

module.exports = app;
