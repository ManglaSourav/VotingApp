const mongooose = require("mongoose");

const optionSchema = new mongooose.Schema({
  options: String,
  votes: {
    type: Number,
    default: 0
  }
});

const pollSchema = new mongooose.Schema({
  user: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "User"
  },
  question: String,
  options: [optionSchema],
  voted: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "User"
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongooose.model("Poll", pollSchema);