import React from 'react';
import { Card } from './Card';
import ReactLogo from "../../icons/react.svg";

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const White = Template.bind({});
White.args = {
  color: 'white',
  icon: <img src={ReactLogo} alt={'React Logo'}/>,
  label: 'React.js',
  description: '1 Year',
  onClick: undefined,
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  icon: <img src={ReactLogo} alt={'React Logo'}/>,
  label: 'JavaScript',
  description: '4 Years',
  onClick: undefined,
};

export const Grey = Template.bind({});
Grey.args = {
  color: 'grey',
  icon: <img src={ReactLogo} alt={'React Logo'}/>,
  label: 'HTML / CSS',
  description: '5+ Years',
  onClick: undefined,
};