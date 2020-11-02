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
  shortTermDebt: [
    {
      creditLimit: {
        type: Number,
        required: false,
      },
      bill: {
        type: String,
        required: true,
      },
      dueDate: {
        type: String,
        required: true,
      },
      minPayment: {
        type: Number,
        required: true,
      },
      amountDue: {
        type: Number,
        required: true,
      },
      amountPaid: {
        type: Number,
        required: true,
      },
      difference: {
        type: Number,
        required: true,
      },
      creditUsage: {
        type: Number,
        required: true,
      },
    },
  ],
  monthlyExpense: [
    {
      totalBill: {
        type: Number,
        required: true,
      },
      bill: {
        type: String,
        required: true,
      },
      dueDate: {
        type: String,
        required: true,
      },
      amountDue: {
        type: Number,
        required: true,
      },
      amountPaid: {
        type: Number,
        required: true,
      },
      notes: {
        type: String,
        required: false,
      },
    },
  ],
  otherExpense: [
    {
      totalBill: {
        type: Number,
        required: true,
      },
      bill: {
        type: String,
        required: true,
      },
      dueDate: {
        type: String,
        required: true,
      },
      amountDue: {
        type: Number,
        required: true,
      },
      amountPaid: {
        type: Number,
        required: true,
      },
      notes: {
        type: String,
        required: false,
      },
    },
  ],
});

//add expected payoff date in React, Do not forget!!!

module.exports = Profile = mongoose.model('profile', ProfileSchema);
