const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  photo: {
    type: String,
  },

  birthdate: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
