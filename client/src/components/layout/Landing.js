import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landingAll'>
      <div className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large py-4'>
              When will life begin to pay you for living it!
            </h1>
            {/* <p className='lead'>
              When will life begin to pay you for living it!
            </p> */}
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Let us coach you
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bulletBox'>
        <div className='bullet'>
          <h4>Simplify your financial goals</h4>
        </div>
        <div className='bullet'>
          <h4>Increase financial awareness &amp; IQ</h4>
        </div>
        <div className='bullet'>
          <h4>Live abundantly</h4>
        </div>
      </div>
      <div className='landing-coaches'>
        <div className='landing-statement'>
          <h1 className='large py-3'>Let us teach you simple practices to become an accountant of your
          personal finances, the start to winning with money.</h1>
        </div>
      </div>
   
      <div className='quizInfo'>
        <div className='quizInner'>
            <h1 className='x-large py-4'>Take our financial Quiz Here</h1>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Take our quiz here
              </Link>
            </div>
            </div>
      </div>
      <div className='landing-info py-3'>
        <h2 className='large py-3'>Custom pathways to financial freedom</h2>
      </div>
      <div className='more-info py-1'>
        <div className='add-text'>
          <h1>Private 1 on 1 Coaching</h1>
          <h5>
              Become accountable to yourself
              Will increase your financial awareness, financial security, and overall confidence.
              Get your personal customizable plan for your goals 
          </h5>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Get Started
            </Link>
          </div>
        </div>
        <div className='picture1 py-1'></div>
      </div>
      <div className='more-info py-1'>
        <div className='picture2 py-1'></div>
        <div className='add-text'>
          <h1>Couples Coaching</h1>
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
        <div className='picture3 py-1'></div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
