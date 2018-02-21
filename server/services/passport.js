const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken,refreshtoken,profile,done) => {
   console.log('access',accessToken)
   console.log('refresh',refreshtoken)
   console.log('profile',profile)
})
);