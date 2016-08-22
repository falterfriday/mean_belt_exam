var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
  name: {
    type: String
  },
  question: {
    type: String,
    required: [true, "question required"],
    minlength: [8, "question too short"],
  },
  opt1: {
    type: String,
    required: [true, "option required"],
    minlength: [3, "too short"]
  },
  opt2: {
    type: String,
    required: [true, "option required"],
    minlength: [3, "too short"]
  },
  opt3: {
    type: String,
    required: [true, "option required"],
    minlength: [3, "too short"]
  },
  opt4: {
    type: String,
    required: [true, "option required"],
    minlength: [3, "too short"]
  },
  opt1vote: {
    type: Number,
  },
  opt2vote: {
    type: Number,
  },
  opt3vote: {
    type: Number,
  },
  opt4vote: {
    type: Number,
  }
}, {timestamps:true});

var Poll = mongoose.model('Poll', PollSchema);
