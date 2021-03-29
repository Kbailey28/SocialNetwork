const express = require('express');
const router = express.Router();
const config = require('config');
const sedngridTransport = require('nodemailer-sendgrid-transport');
const sendGrid = config.get('SENDGRID_API_KEY');
const Quiz = require('../../models/Quiz');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const info = `<h1>The Innocent</h1>

<p>The Innocent takes the ostrich approach to money
matters. Innocents often live in denial, burying their heads
in the sand so they won’t have to see what is going on
around them. The Innocent is easily overwhelmed by
financial information and relies heavily on the advice and
opinions of others. Innocents are perhaps the most
trusting of all the money archetypes because they do not
see people or situations for what they are.
The Innocent’s goal is safety at all costs and they often
have a fear of abandonment</p>

<h4>Characteristics:</h4>

<p>Trusting,
Indecisive,
Happy-go-lucky (externally),
Fearful, or anxious,
Financially dependent,
Nonconfrontational,
Feels powerless,
Represses feelings and beliefs,
Seeks security<p>

<h1>The Victim</h1>

<p>Victims are prone to living in the past and blaming their
financial woes on external factors. Passive-aggressive
(prone to acting out their feelings in passive ways rather
than through direct action) in nature, Victims often appear
disguised as Innocents, because they seem so powerless
and appear to want others to take care of them. However,
this appearance is often either a conscious or
subconscious ploy to get others to do for them what they
refuse to do for themselves. Victims generally have a
litany of excuses for why they are not more successful,
and they are all based on their historical mythology. That
is not to say that bad things haven’t actually happened to
the Victim.</p>

<h4>Characteristics:</h4>
<p>Prone to blaming others,
Highly emotional (melancholy or angry),
Live in the past,
Financially irresponsible,
Seeks to be rescued,
Resentful,
Unforgiving,
Addictive,
Lives out a self-fulfilling prophecy,
Feels powerless</p> 

<h1>The Warrior</h1>

<p>The Warrior sets out to conquer the money world and is
generally seen as successful in the business and financial
worlds. Warriors are adept investors, focused, decisive,
and in control. Although Warriors will listen to advisors,
they make their own decisions and rely on their own instincts and resources to guide them. Warriors often
have difficulty recognizing the difference between what
appears to be an adversary and a worthy opponent. A
worthy opponent should be embraced as an opportunity to
put down the sword and recognize the potential for growth
and transformation being offered in disguise.</p>

<h4>Characteristics:</h4>

<p>Powerful,
Driven,
Loyal,
Competitive,
Disciplined,
Goal-oriented,
Financially successful,
Confident,
Calculating,
Generous,
Rescuer,
Wise,
discerning</p>

<h1>The Martyr</h1>

<p>Martyrs are so busy taking care of others’ needs that they
often neglect their own. Financially speaking, Martyrs
generally do more for others than they do for themselves.
They often rescue others (a child, spouse, friend, partner)
from some circumstance or other. However, Martyrs do
not always let go of what they give and are repeatedly let
down when others fail to meet up to their expectations.
They have formed an unconscious attachment to their
own suffering.</p>

<h4>Characteristics:</h4>

<p>controlling,
feels unappreciated,
long-suffering,
difficulty receiving,
caretaker,
self-sacrificing,
disappointed,
rescuer,
perfectionist,
resentful,
passive-aggressive,
compassionate,
wise</p>

<h1>The Fool</h1>

<p>The Fool plays by a different set of rules altogether. A
gambler by nature, the Fool is always looking for a windfall
of money by taking financial shortcuts. Even though the
familiar adage “a fool and his money are soon parted”
often comes true, Fools often win because they are willing
to throw the dice; they are willing to take chances.</p>

<h4>Characteristics:</h4>

<p>restless,
undisciplined,
financially irresponsible,
impetuous,
overly generous,
happy-go-lucky,
adventurous,
lives for today</p>

<h1>Creator/Artist</h1>

<p>Creator/Artists are on a spiritual or artistic path. They often
find living in the material world difficult and frequently have
a conflicted love/hate relationship with money. They love
money for the freedom it buys them but have little or no
desire to participate in the material world. The
Creator/Artist often overly identifies with the interior world
and may even despise those who live in the material
world. Their negative beliefs about materialism only create a block to the very key to
the freedom they so desire.</p>

<h4>Characteristics:</h4>

<p>highly artistic and/or spiritual,
passive,
internally motivated,
detached,
nonmaterialistic,
visionary, 
truth seeker</p>

<h1>The Tyrant</h1>

<p>Tyrants use money to control people, events, and
circumstances. The Tyrant hoards money, using it to
manipulate and control others. Although Tyrants may have
everything they need or desire, they never feel complete,
comfortable, or at peace. The Tyrant’s greatest fear is loss
of control. Tyrants are often overdeveloped Warriors who
have become highly invested in their need for control and dominance.</p>

<h4>Characteristics:</h4>

<p>controlling,
Rigid,
Manipulative,
Fearful,
Oppressive,
Prone to rage or violence,
Critical and judgmental,
Aggressive,
Unforgiving,
Secretive,
Highly materialistic</p>
 

<h1>The Magician</h1>

<p>The Magician is the ideal money type. Using a new and
ever-changing set of dynamics both in the material world and in the world of the Spirit, Magicians
know how to transform and manifest their own financial
reality. At their best, when they are willing to claim their
own power, they are all Magicians. The archetype that is
active in your life now is the place you need to grow from.
By understanding your own personal mythology and the
history behind your current money type, you will become
conscious of patterns and behavior that are preventing
you from having the relationship with money you desire.</p>

<h4>Characteristics:</h4>

<p>Spiritual,
Wise,
Conscious,
Vibrant,
Trusting,
Generous,
Loving,
Fluid,
Lives in the present,
Powerful,
Optimistic,
Confident,
Compassionate,
Detached,
Open to flow,
Financially balanced,
transforms reality,
tells the truth</p>`

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
        let user = await Quiz.findOne({ email });

        const mailOptions = {
            from: 'kyle@capitalchoicesolutions.com',
            to: email,
            subject: 'Financial Literacy Quiz',
            text: 'Thank you for taking our Quiz',
            html: info,
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
          email,
        });

        await quiz.save();
  
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
  
  module.exports = router;