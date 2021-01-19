import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import  Logo  from '../layout/logo';

const Navbar = ({ auth: { isAuthenticated, isAdmin, loading, }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/About'>          
        {' '}
          <i className='fas fa-user'></i>{' '} <span className='hide-sm'>About Us</span></Link>
      </li>
      <li>
        <Link to='/Pricing'>
        {' '}
          <i className='fas fa-money-check-alt'></i>{' '} <span className='hide-sm'>Pricing</span></Link>
      </li>
      <li>
        <Link to='/dashboard'>
          {' '}
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/posts-user'>
        {' '}
          <i className='fas fa-sticky-note'></i>{' '} <span className='hide-sm'>Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/login'>
        {' '}
          <i className='fas fa-sign-in-alt'></i>{' '} 
          <span className='hide-sm'>Login</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/About'>About Us</Link>
      </li>
      <li>
        <Link to='/Pricing'>Pricing</Link>
      </li>
    </ul>
  );

  const adminLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Clients</Link>
      </li>
      <li>
        <Link to='/posts'>
        {' '}
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          {' '}
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-white'>
      <h1>
        <Link to='/'>
          <Logo />
        </Link>
      </h1>
      {!loading && (
        <Fragment>
          {isAuthenticated && isAdmin
            ? adminLinks
            : guestLinks || isAuthenticated
            ? authLinks
            : guestLinks}
        </Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
