require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express());
app.use(cors());
app.use(cookieParser());

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  process.env.NODE_ENV != 'production' && console.log(`server running in development mode on port ${port}`);
});
