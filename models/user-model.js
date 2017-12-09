const mongoose   = require('mongoose');
const Schema     = mongoose.Schema();

const userSchema = new Schema(
  {

  },
  {
    timeStamps: true;
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
