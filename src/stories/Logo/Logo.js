import React from 'react';
import logo from '../../images/logo.png';
import './logo.css';

/**
 * Primary UI component for user interaction
 */
export const Logo = () => {
  return (
    <img
      className={['logo',].join(' ')}
      src={logo}
      alt={'skipdev logo'}>
    </img>
  );
};
