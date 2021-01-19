import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Math = () => {

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const valueTotal = value1 / value2;

  
  return (
    <Fragment>
      <section className = 'container'>
      <h1 className='large text-primary'>Calculations</h1>
        <p className='lead'>Use these helpful calculators in your financial journey</p>
      <form className='form'>
      <div className='form-group'>
        Value 1 
      <input 
      type='number' 
      placeholder='Value'
      value={value1} 
      name='value1'
      onChange={(e) => setValue1(e.target.value)}
      />
      </div>
      <div className='form-group'>
        Value 2 
      <input 
      type='number' 
      placeholder='Value'
      value={value2} 
      name='value2'
      onChange={(e) => setValue2(e.target.value)}
      />
      </div>
      <div className='form-group'>
        Solution
      <input 
      type='number' 
      value={valueTotal} 
      name='value2'
      />
      </div>
      </form>
      </section>
    </Fragment>
  )
};

        


export default Math;
