require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const MONGO = process.env.MONGODB;
const db = mongoose.connection;

//* Imports
const userController = require('./controllers/user.controller');
const movieController = require('./controllers/movie.controller');
// const validateSession = require('./middleware/validate-session');

//* Middleware
mongoose.connect(`${MONGO}/movies`);
db.once('open', () => console.log(`Connected: ${MONGO}`));
app.use(express.json());

//* Routes
app.use('/user', userController);
// app.use(validateSession); // all routes below require validation when used this way.
app.use('/movies', movieController);

app.listen(PORT, () => console.log(`Movie Server: ${PORT}`));

