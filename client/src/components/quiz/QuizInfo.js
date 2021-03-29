import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import axios from 'axios';
import PropTypes from 'prop-types';
import {quiz} from '../../actions/quiz';

const QuizInfo = ({quiz}) => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Claim inforamtion about your financial type</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Enter your email address
        </p>
        <form className='form' onSubmit={(e) => {
            e.preventDefault();
            quiz(formData);
            console.log('email added');
        }}>
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
          <input type='submit' className='btn btn-primary' value='Click here to send' />
        </form>
      </section>
    </Fragment>
  );
};

QuizInfo.propTypes = {
  quiz: PropTypes.func.isRequired,
};


export default connect(null, {quiz})(QuizInfo);
