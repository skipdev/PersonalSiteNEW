import React from 'react';
import ReactLogo from '../../icons/react.svg';
import './threecards.css';
import {Card} from '../Card/Card';

export const ThreeCards = ({ card1, card2, card3, ...props }) => {
  return (
    <div
      className={['threecards'].join(' ')}
      {...props}
    >
      <div className={'card__wrapper'}>{card1}</div>
      <div className={'card__wrapper'}>{card2}</div>
      <div className={'card__wrapper'}>{card3}</div>
    </div>
  );
};

ThreeCards.propTypes = {
  card1: Card,
  card2: Card,
  card3: Card,
};

ThreeCards.defaultProps = {
  card1: <Card color={'blue'} icon={ReactLogo} label={'Example'} description={'desc'}/>,
  card2: <Card color={'blue'} icon={ReactLogo} label={'Example'} description={'desc'}/>,
  card3: <Card color={'blue'} icon={ReactLogo} label={'Example'} description={'desc'}/>,
};
