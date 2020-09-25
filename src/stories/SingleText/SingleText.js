import React from 'react';
import PropTypes from 'prop-types';
import './singletext.css';

export const SingleText = ({ color, text, align, line, ...props }) => {
  return (
    <div
      className={['singletext', `singletext--${color}`, `singletext--${align}`, `singletext--line-${line}`].join(' ')}
      {...props}
    >
      {/*<span className={'singletext__line'}>{line ? <hr/> : null}</span>*/}
      <span className={'singletext__text'}>{text}</span>
    </div>
  );
};

SingleText.propTypes = {
  color: PropTypes.oneOf(['blue', 'white', 'grey']).isRequired,
  text: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  line: PropTypes.bool,
};

SingleText.defaultProps = {
  color: 'white',
  text: 'Text Example',
  align: 'center',
  line: false,
};
