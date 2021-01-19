const express = require('express');
const router = express.Router();
const config = require('config');
const sedngridTransport = require('nodemailer-sendgrid-transport');
const sendGrid = config.get('SENDGRID_API_KEY');
const Quiz = require('../../models/Quiz');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(sedngridTransport({
  auth:{
    api_key: sendGrid
  }
}));

// @route  POST api/quiz
// @desc   quiz email
// @access public
router.post(
    '/',
    [
      check('email', 'Please include a valid email').isEmail(),
    ],
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
            subject: 'Financial Literacy Quiz',
            text: 'Thank you for taking our Quiz',
            html:
              '<h3><p>Here are your quiz results</p></h3>',
          };
    
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.send('email sent');
            }
          });
  
        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'user already exists' }] });
        }
  
  
        quiz = new Quiz({
          name,
          email,
          avatar,
          password,
        });
  
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
  
  module.exports = router;