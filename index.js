const express = require('express');
const appRoute = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
appRoute.appRoute(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started on Port 3000'));
