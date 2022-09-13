const express = require('express');
const keys = require('./config/keys');
const passport = require('passport')
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();
app.use(
    cookieSession({
        // cookie last for 30 days
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());
// const authRoutes = require('./routes/authRoutes')
// authRoutes(app)
require('./routes/authRoutes')(app);

// app.get('/', (req, res) =>
//     {res.send({bye: 'buddy'});});

// if Heroku define port then use it, otherwise 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);