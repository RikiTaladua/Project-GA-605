const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Flight = many usersFollowing 


const userSchema = new Schema(
  {
    userName: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);