const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route  GET api/profile/me
// @desc   Get current users profile
// @access private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'email', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/profile
// @desc   Create or update user profile
// @access private
router.post(
  '/',
  [
    auth,
    [
      check('goals', 'Goals are required').not().isEmpty(),
      check('balance', 'Balance is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      location,
      phoneNumber,
      monthlyNetIncome,
      goals,
      balance,
      payment,
      rate,
      savings,
      investments,
    } = req.body;

    // build profile

    const profileFields = {};
    profileFields.user = req.user.id;
    if (goals) {
      profileFields.goals = goals.split(',').map((goal) => goal.trim());
    }
    if (balance) profileFields.balance = balance;
    if (payment) profileFields.payment = payment;
    if (rate) profileFields.rate = rate;
    if (savings) profileFields.savings = savings;
    if (investments) profileFields.investments = investments;
    if (location) profileFields.location = location;
    if (phoneNumber) profileFields.phoneNumber = phoneNumber;
    if (monthlyNetIncome) profileFields.monthlyNetIncome = monthlyNetIncome;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  GET api/profile
// @desc   Get all profiles
// @access public

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'name',
      'email',
      'avatar',
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access public

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'email', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route  Delete api/profile
// @desc   Delete profile and user
// @access Private

router.delete('/', auth, async (req, res) => {
  try {
    //Remove profile

    await Profile.findOneAndRemove({ user: req.user.id });

    //Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  PUT api/profile/shortTermDebt
// @desc   Add profile debt (short term)
// @access Private
router.put(
  '/shortTermDebt',
  [
    auth,
    [
      check('bill', 'Bill name is required').not().isEmpty(),
      check('dueDate', 'Due Date is required').not().isEmpty(),
      check('minPayment', 'Minimum payment is required').not().isEmpty(),
      check('amountDue', 'Amount due is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      creditLimit,
      bill,
      dueDate,
      minPayment,
      amountDue,
      amountPaid,
      rate,
      difference,
      creditUsage,
      notes,
    } = req.body;

    const newShortTermDebt = {
      creditLimit,
      bill,
      dueDate,
      minPayment,
      amountDue,
      amountPaid,
      rate,
      difference,
      creditUsage,
      notes,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.shortTermDebt.unshift(newShortTermDebt);

      await profile.save(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  Delete api/profile/shortTermDebt/:shortTermDebt_id
// @desc   Delete short term debt from profile
// @access Private

router.delete('/shortTermDebt/:std_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.shortTermDebt
      .map((item) => item.id)
      .indexOf(req.params.std_id);

    profile.shortTermDebt.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  PUT api/profile/monthlyExpense
// @desc   Add profile debt (monthly term)
// @access Private
router.put(
  '/monthlyExpense',
  [
    auth,
    [
      check('bill', 'Bill name is required').not().isEmpty(),
      check('dueDate', 'Due Date is required').not().isEmpty(),
      check('amountDue', 'Amount due is required').not().isEmpty(),
      check('amountPaid', 'Amount paid is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { totalBill, bill, dueDate, amountDue, amountPaid, notes } = req.body;

    const newMonthlyExpense = {
      totalBill,
      bill,
      dueDate,
      amountDue,
      amountPaid,
      notes,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.monthlyExpense.unshift(newMonthlyExpense);

      await profile.save(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  Delete api/profile/monthlyExpense/:ME_id
// @desc   Delete short term debt from profile
// @access Private

router.delete('/monthlyExpense/:me_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.monthlyExpense
      .map((item) => item.id)
      .indexOf(req.params.ME_id);

    profile.monthlyExpense.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  PUT api/profile/otherExpense
// @desc   Add profile debt (Other)
// @access Private
router.put(
  '/otherExpense',
  [
    auth,
    [
      check('bill', 'Bill name is required').not().isEmpty(),
      check('dueDate', 'Due Date is required').not().isEmpty(),
      check('amountDue', 'Amount due is required').not().isEmpty(),
      check('amountPaid', 'Amount paid is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { totalBill, bill, dueDate, amountDue, amountPaid, notes } = req.body;

    const newOtherExpense = {
      totalBill,
      bill,
      dueDate,
      amountDue,
      amountPaid,
      notes,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.otherExpense.unshift(newOtherExpense);

      await profile.save(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  Delete api/profile/otherExpense/:otherExpense_id
// @desc   Delete Other expense from profile
// @access Private

router.delete('/otherExpense/:oe_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.otherExpense
      .map((item) => item.id)
      .indexOf(req.params.OE_id);

    profile.otherExpense.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
