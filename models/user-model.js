const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const userSchema = new Schema(
  {
      firstName: {
      type:     String,
      required: [true, "Please enter your first name."]
    },

    lastName: {
      type:     String,
      required: [true, "Please enter your last name."]
    },

    email: {
      type:     String,
      required: [true, "Please enter your email."]
    },

    encryptedPassword: {
      type:     String,
      required: [true, "Please enter your password."]
    }
  }, //END USERSCHEMA

  {
    timeStamps: true
  } // END TIMESTAMPS
);

const UserModel = mongoose.model("User", userSchema);

module.exports  = UserModel;
