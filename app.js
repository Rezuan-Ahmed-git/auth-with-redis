require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const { verifyAccessToken } = require('./helpers/jwt_helper');

require('./helpers/init_mongodb');

const AuthRoute = require('./Routes/Auth.route');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', verifyAccessToken, async (req, res, next) => {
  res.send('Hello from express.');
});

app.use('/auth', AuthRoute);

//error handler
app.use(async (_req, _res, next) => {
  next(createError.NotFound());
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
