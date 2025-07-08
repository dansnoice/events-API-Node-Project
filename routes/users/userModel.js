const mongoose = require("mongoose");
const autopopulate= require('mongoose-autopopulate');
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      default: "",
    },
    bookedEvent: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      autopopulate: true,
      default: []
  }],
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(autopopulate);
const User = mongoose.model("User", userSchema);
module.exports = User;
