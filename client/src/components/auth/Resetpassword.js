import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import axios from 'axios';
import PropTypes from 'prop-types';

const Resetpassword = ({ setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const { email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();


    if (password !== password2) {
      setAlert('passwords do not match', 'danger');
    } else {
      try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
      const body = JSON.stringify({ email, password });
      console.log(body);
      
        const res = await axios.post('/api/users/resetpassword', body, config);
        console.log(res.data);
        setAlert('Password Updated, please navigate to login screen', 'success');
      } catch (err) {
        const errors = err.response.data.errors;
    
        if (errors) {
          errors.forEach((error) => setAlert(error.msg, 'danger'));
        }

      }
    };
    
    };


  // Redirect if Reset
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Account update</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Reset your password
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Resetpassword' />
        </form>
      </section>
    </Fragment>
  );
};

Resetpassword.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, Resetpassword })(
  Resetpassword
);
