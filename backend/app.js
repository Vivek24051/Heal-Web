const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(cookieParser());

//route imports
const disea = require('./routes/diseaRoute');
const user = require('./routes/userRoute');
const apt = require('./routes/aptRoute');

app.use('/api/v1', disea);
app.use('/api/v1', user);
app.use('/api/v1', apt);

// middleware for error
app.use(errorMiddleware);

module.exports = app;
