const passport  = require('passport');
const UserModel = require('../models/user-model');

passport.serializeUser( (userFromDb, done ) => {
  done(null, userFromDb._id);
});

passport.deserializeUser( (idFromSession, done) => {
  UserModel
  .findById(idFromSession)
  .then( userFromDB => {
    done(null, userFromDB);
  })
  .catch( err => {
    done( err );
  })
})
