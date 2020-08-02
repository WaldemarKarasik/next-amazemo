const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

module.exports = passport.use(
  new FacebookStrategy(
    {
      clientID: 983727122049761,
      clientSecret: "bb75902f8a52abfd758fcaa06e746d4a",
      callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        if (err) console.log(err);
        return cb(err, user);
      });
    }
  )
);
