const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const sedngridTransport = require('nodemailer-sendgrid-transport');
const sendGrid = config.get('SENDGRID_API_KEY');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(sedngridTransport({
  auth:{
    api_key: sendGrid
  }
}));

// @route  POST api/users
// @desc   Register User
// @access public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'user already exists' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


// password reset email
router.post(
  '/reset',
  [check('email', 'Please include a valid email').isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    try {
      let user = await User.findOne({ email });

      const mailOptions = {
        from: 'kyle@capitalchoicesolutions.com',
        to: email,
        subject: 'Reset Password',
        text: 'To reset password follow instructions',
        html:
          '<h3><p>You requested a password reset from Capital Choice Solutions</p><a href="http://localhost:3000/resetpassword">Reset password here</a><p>If you did not request a password reset, please disregard this email</p></h3>',
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.send('email sent');
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//reset password

// @route  POST api/users
// @desc   Register User
// @access public
router.post(
  '/resetpassword',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOneAndUpdate(
        { 
          email 
        },
        {
          email, password
        }
        );

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'That user does not exist' }] });
      }


      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
module.exports = router;
