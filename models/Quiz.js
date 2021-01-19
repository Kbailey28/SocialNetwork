const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);