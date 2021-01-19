import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pricing = (props) => {
  return (
    <section>
      <div className='about-top p-2'>
        <h1 className='x-large'>Our Packages</h1>
      </div>
      <div className='more-info py-1'>
        <div className='picture5 py-1'></div>
        <div className='add-text'>
          <h1>Couples Coaching</h1>
          <h3></h3>
          <h5>
          Overcome the awkward money conversation
          Help organize your money journey in your relationship 
          Long term financial goals ( college, home purchase, investing ) 

          </h5>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className='more-info py-1'>
      <div className='picture4 py-1'></div>
        <div className='add-text'>
          <h1>Fully available and able to help any client.</h1>
          <h5>
            We are willing to work with anyone who desires to better themselves
            and improve financially. Customer service and satisfaction is our
            priority, we want to build, create and contribute to your financial
            growth.
          </h5>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Get Started
            </Link>
          </div>
        </div>
        </div>
        <div className='more-info py-1'>
          <div className='add-text'>
          <h1>Pricing plans</h1>
          <p>BLITZ PACKAGE  3 sessions= 500</p>
          <p>STRIKE PACKAGE 90 days 8 session= 1050</p>
          <p>CULTIVATE PACKAGE 6 months 16 sessions 2010</p> 
          <p>HARVEST PACKAGE 12 months 34 sessions= 4000</p>
      </div>
        </div>
    </section>
  );
};

Pricing.propTypes = {};

export default Pricing;
