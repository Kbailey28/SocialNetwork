import React, { Fragment } from 'react';
import logo from './IMG_95531.jpg';

export default () => (
  <Fragment>
    <img className='logo'
      src={logo}
      style={{ width: '120px', margin: 'auto'}}
      alt='logo'
    />
  </Fragment>
);

