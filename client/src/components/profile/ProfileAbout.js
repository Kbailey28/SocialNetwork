import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: { monthlyNetIncome, goals, balance, payment, savings, investments },
}) => (
  <div className='profile-about bg-light p-2'>
    <h2 className='text-primary'>Goals</h2>
    <div className='goals'>
      {goals.map((goal, index) => (
        <div key={index} className='p-1'>
          {goal}
        </div>
      ))}
    </div>
    <div className='line'></div>
    <p className='text-primary'>
      Monthly Net Income: <span className='text-black'>{monthlyNetIncome}</span>
    </p>
    <p className='text-primary'>
      Balance: <span className='text-black'>{balance}</span>
    </p>
    <p className='text-primary'>
      Payment: <span className='text-black'>{payment}</span>
    </p>
    <p className='text-primary'>
      Savings: <span className='text-black'>{savings}</span>
    </p>
    <p className='text-primary'>
      Investments: <span className='text-black'>{investments}</span>
    </p>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
