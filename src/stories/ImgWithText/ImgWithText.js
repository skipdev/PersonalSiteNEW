import React from 'react';
import PropTypes from 'prop-types';
import './imgwithtext.css';

export const ImgWithText = ({ txtColor, text, img, imgAlign, ...props }) => {
  return (
    <div
      className={['imgwithtext', `imgwithtext--${txtColor}`, `imgwithtext--img-${imgAlign}`].join(' ')}
      {...props}
    >
      <span className={'imgwithtext__img'}>{img}</span>
      <span className={'imgwithtext__text'}>{text}</span>
    </div>
  );
};

ImgWithText.propTypes = {
  txtColor: PropTypes.oneOf(['blue', 'white', 'grey', 'black']).isRequired,
  img: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  imgAlign: PropTypes.oneOf(['left', 'right']).isRequired,
};

ImgWithText.defaultProps = {
  txtColor: 'white',
  img: <img src={'random.jpg'} alt={'random'}/>,
  text: <p>hi</p>,
  imgAlign: 'left',
};
