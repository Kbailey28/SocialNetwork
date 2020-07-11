const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  goals: {
    type: [String],
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
  investments: {
    type: Number,
    required: false,
  },
});

//add expected payoff date in React, Do not forget!!!

module.exports = Profile = mongoose.model('profile', ProfileSchema);
