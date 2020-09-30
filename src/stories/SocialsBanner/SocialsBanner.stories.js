import React from 'react';
import { SocialsBanner } from './SocialsBanner';

export default {
  title: 'Example/SocialsBanner',
  component: SocialsBanner,
};

const Template = (args) => <SocialsBanner {...args} />;

export const Regular = Template.bind({});
Regular.args = {};
