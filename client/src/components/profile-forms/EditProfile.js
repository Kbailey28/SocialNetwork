import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    goals: '',
    balance: '',
    payment: '',
    rate: '',
    savings: '',
    investments: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      goals: loading || !profile.goals ? '' : profile.goals.join(','),
      balance: loading || !profile.balance ? '' : profile.balance,
      payment: loading || !profile.payment ? '' : profile.payment,
      rate: loading || !profile.rate ? '' : profile.rate,
      savings: loading || !profile.savings ? '' : profile.savings,
      investments: loading || !profile.investments ? '' : profile.investments,
    });
  }, [loading, getCurrentProfile]);

  const { goals, balance, payment, rate, savings, investments } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Balance'
            name='balance'
            value={balance}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please enter the total balance owed
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Payment'
            name='payment'
            value={payment}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please enter your monthly payment.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Rate'
            name='rate'
            value={rate}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Please enter your interest rate</small>
        </div>{' '}
        <div className='form-group'>
          <input
            type='text'
            placeholder='Savings'
            name='savings'
            value={savings}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please enter your approximate current savings
          </small>
        </div>{' '}
        <div className='form-group'>
          <input
            type='text'
            placeholder='Investments'
            name='investments'
            value={investments}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please enter your current total ammount invested
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Goals'
            name='goals'
            value={goals}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. Goal 1, Goal 2, Goal 3)
          </small>
        </div>
        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            {' '}
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input type='text' placeholder='Twitter URL' name='twitter' />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input type='text' placeholder='Facebook URL' name='facebook' />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input type='text' placeholder='YouTube URL' name='youtube' />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input type='text' placeholder='Linkedin URL' name='linkedin' />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input type='text' placeholder='Instagram URL' name='instagram' />
            </div>
          </Fragment>
        )}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
