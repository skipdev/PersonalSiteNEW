import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, label, ...props }) => {
  return (
    <button
      type="button"
      className={['button', `button--${type}`].join(' ')}
      {...props}
    >
      <span className={'button__label'}>{label}</span>
    </button>
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'plain']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'secondary',
  onClick: undefined,
};
