const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const User = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: keys.google.callbackURl,
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      console.log(profile);

      User.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("user is our current user" + currentUser);
          done(null, currentUser);
        } else {
          new User({
            username: profile.displayName,
            googleid: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("new user created" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
