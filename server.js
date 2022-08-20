// Get .env variables
require("dotenv").config();

// Pull PORT from .env, give default value of 4000
// Pull MONGODB_URL from .env
const { PORT, MONGODB_URL, GOOGLE_CREDS} = process.env;

// Import Firebase for authentication
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(GOOGLE_CREDS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Import express
const express = require("express");

// Create application object
const app = express();

// Import mongoose
const mongoose = require("mongoose");

// Import middleware
const cors = require("cors");
const morgan = require("morgan");

mongoose.connect(MONGODB_URL);
// Connection Events
mongoose.connection
.on('connected', () => console.log('connected to MongoDB'))
.on('error', (err) => console.log('Error with MongoDB: ' + err.message));

// MIDDLEWARE
app.use(cors()); 
app.use(morgan("dev")); 
app.use(express.json());

app.use(async (req, res, next) => {
    const token = req.get('Authorization')
    if(token) {
        const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''));
        req.user = user;
    } else {
        req.user = null;
    }
    next();
})

// ROUTES / LINK TO CONTROLLER
app.use('/', require('./controllers/feedRoutes'));
app.use('/post', require('./controllers/postRoutes'));
// app.use('/profile', require('./controllers/profileRoutes'));
// app.use('/user', require('./controllers/userRoutes'));

// LISTENER
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
});

module.exports = app;