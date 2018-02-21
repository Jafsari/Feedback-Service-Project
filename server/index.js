const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

const authRoutes = require('./routes/authroutes')


mongoose.connect(keys.mongoURI)

authRoutes(app);


const PORT = process.env.PORT || 5000
app.listen(PORT);