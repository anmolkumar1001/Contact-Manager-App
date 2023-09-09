const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "please enter your mail id"],
    },
    password: {
      type: String, //data type of field
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true, //this will create two fields createdAt and updatedAt in our schema which is automatically created by mongoDB when we save a document to database
  }
);

module.exports = mongoose.model("User", userSchema);
