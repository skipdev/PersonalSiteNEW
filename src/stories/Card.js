import React from 'react';
import PropTypes from 'prop-types';
import ReactLogo from '../icons/react.svg';
import './card.css';

export const Card = ({ color, label, description, icon, onClick, ...props }) => {
  return (
    <div
      className={['card', `card--${color}`].join(' ')}
      onClick={onClick}
      {...props}
    >
      <span className={'card__icon'}>{icon}</span>
      <span className={'card__label'}>{label}</span>
      <span className={'card__desc'}>{description}</span>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf(['blue', 'white', 'grey']).isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  color: 'white',
  icon: ReactLogo,
  label: 'Title of Card',
  description: 'Description of Card',
  onClick: undefined,
};
