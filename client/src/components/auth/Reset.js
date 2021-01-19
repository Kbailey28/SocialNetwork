import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import axios from 'axios';
import PropTypes from 'prop-types';

const Reset = ({setAlert}) => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify({ email });

      const res = await axios.post('/api/users/reset', body, config);
      console.log(res.data);
      setAlert('Please check your email for reset password link', 'success');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Reset Your Password</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Enter your email address
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Reset' />
        </form>
      </section>
    </Fragment>
  );
};

Reset.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile
})

export default connect(mapStateToProps, {setAlert})(Reset);
