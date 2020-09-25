import React from 'react';
import { SingleText } from './SingleText';

export default {
  title: 'Example/SingleText',
  component: SingleText,
};

const Template = (args) => <SingleText {...args} />;

export const BlueCenter = Template.bind({});
BlueCenter.args = {
  color: 'blue',
  text: 'Example Text',
  align: 'center',
  line: false
};

export const GreyLeft = Template.bind({});
GreyLeft.args = {
  color: 'grey',
  text: 'Example Text',
  align: 'left',
  line: false
};