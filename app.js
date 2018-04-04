const createError = require('http-errors');
const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

module.exports = app;
