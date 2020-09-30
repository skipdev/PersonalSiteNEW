import React from 'react';
import { ImgWithText } from './ImgWithText';
import ProfilePic from '../../images/profile.jpg';

export default {
  title: 'Example/ImgWithText',
  component: ImgWithText,
};

const Template = (args) => <ImgWithText {...args} />;

export const White = Template.bind({});
White.args = {
  txtColor: 'white',
  img: <img src={ProfilePic} alt={'random'}/>,
  text: <p>hi asdfaSDFHGAJFD GAHDF GIUAHGDUG AHDLFUGIHA PUFDIHGPA FDGHA GFUPBpsdfhubpDSUHPFDShf ASDOIYFAH fdsf</p>,
  imgAlign: 'left',
};