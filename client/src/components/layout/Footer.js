import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import  Logo  from '../layout/logo';

const Footer = () => {
    return(
    <div className='Footer'>
    <h4 className='py-1'>&copy; Capital Choice Solutions 2020</h4>
  </div>
    )};

Footer.propTypes = {};

export default Footer;