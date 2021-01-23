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
          <h1 className='large'>Couples Coaching</h1>
          <h3></h3>
          <h5 className='lead'>
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
          <h1 className='large'>Fully available and able to help any client.</h1>
          <h5 className='lead'>
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
          <h1 className='large'>Pricing plans</h1>
          <p className='lead'>BLITZ PACKAGE  3 sessions= 500</p>
          <p className='lead'>STRIKE PACKAGE 90 days 8 session= 1050</p>
          <p className='lead'>CULTIVATE PACKAGE 6 months 16 sessions 2010</p> 
          <p className='lead'>HARVEST PACKAGE 12 months 34 sessions= 4000</p>
      </div>
        </div>
    </section>
  );
};

Pricing.propTypes = {};

export default Pricing;
