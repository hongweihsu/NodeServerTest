const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
   User.findById(id).then(user => {
       done(null, user)
   })

});

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'},
    (accessToken, refreshToken, profile, done) => {
        // console.log('accessToken',accessToken);
        // console.log('refreshToken',refreshToken);
        // console.log('refreshToken',profile);
        User.findOne({googleId: profile.id}).then((exsistingUser) => {
            if (exsistingUser) {
                // already have a record with this user id
                // done means tasks of passport is finished
                done(null, exsistingUser); //null means no errors/ problems
            }else{
                // make a new record
                // async needs .then()
                new User({googleId: profile.id}).save().then((user)=> done(null, user));
            }
        })

    }),
);