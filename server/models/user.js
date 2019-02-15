const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const pollsSchema = new mongoose.Schema({

// })
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  created: {
    type: Date,
    default: Date.now
  }
  //   polls: [{ type: mongoose.Schema.Types.ObjectID, ref: "Poll" }]
});

userSchema.pre("save", async function(next) { //it takes effect before saving to database
  try {
    if (!this.isModified("password")) {
    }
  } catch {}
});
module.exports = mongoose.model("User", userSchema);
