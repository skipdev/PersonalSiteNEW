import React from 'react';
import whiteTransition from '../../images/transition.png';
import whiteTransitionUpsideDown from '../../images/transition_upsidedown.png';
import './whitetransition.css';
import PropTypes from "prop-types";
import {Button} from "../Button/Button";

export const WhiteTransition = ({ upsideDown, ...props }) => {
  return (
    <img
      className={['whiteTransition', `whiteTransition--${upsideDown && 'upsideDown'}`].join(' ')}
      src={upsideDown ? whiteTransitionUpsideDown : whiteTransition}
      alt={'white to blue transition'}>
    </img>
  );
};

WhiteTransition.propTypes = {
  upsideDown: PropTypes.bool
};

Button.defaultProps = {
  upsideDown: false,
};