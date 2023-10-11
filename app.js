require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');

const app = express();

app.get('/', async (req, res, next) => {
  res.send('Hello from express.');
});

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
