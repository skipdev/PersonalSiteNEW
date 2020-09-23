import React from 'react';

import { Companies } from './Companies';

export default {
  title: 'Example/Companies',
  component: Companies,
};

const Template = (args) => <Companies {...args} />;

export const Regular = Template.bind({});
Regular.args = {};
