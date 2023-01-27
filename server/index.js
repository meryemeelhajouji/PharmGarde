require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const initDB = require('./config/initDB');
const projectRoutes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

// initialize the database
(async () => {
  await initDB();
})();

const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// routes
app.use(projectRoutes);

// error handler
app.use(errorHandler);

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  process.env.NODE_ENV != 'production' && console.log(`server running in development mode on port ${port}`);
});

module.exports = app;
