import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const About = (props) => {
  return (
    <section>
      <div className='about-top p-2'>
        <h1 className='x-large'>Our Team</h1>
      </div>
      <div className='about-coaches'>
        <div className='card1'>
          <div className='container'>
            <h4>
              <b>Andrew Nangle</b>
            </h4>
            <p>Financial Coach</p>
          </div>
        </div>
        <div className='card2'>
          <div className='container'>
            <h4>
              <b>Jonathan Thomas</b>
            </h4>
            <p>Financial Coach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {};

export default About;
