import React from 'react';
import { Card } from './Card';
import {ThreeCards} from "./ThreeCards";
import ReactLogo from "../icons/react.svg";

export default {
  title: 'Example/ThreeCards',
  component: ThreeCards,
};

const Template = (args) => <ThreeCards {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  card1: <Card color={'blue'} icon={ReactLogo} label={'Example'} description={'desc'}/>,
  card2: <Card color={'blue'} icon={ReactLogo} label={'Example'} description={'desc'}/>,
  card3: <Card color={'blue'} icon={ReactLogo} label={'Example'} description={'desc'}/>,
};