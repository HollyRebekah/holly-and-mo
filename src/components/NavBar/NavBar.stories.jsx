import React from 'react';

import { NavBar } from './NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const main = Template.bind({});

