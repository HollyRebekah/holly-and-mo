import React from 'react';

import { Detail } from './Detail';
import { ReactComponent as BarnIcon } from '../../../svgs/barn-icon.svg';

export default {
  title: 'Molecules/Detail',
  component: Detail,
};

const Template = (args) => <Detail {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <BarnIcon />,
  title: 'Where',
  info: 'Stock Farm Barn, Altrincham WA14 3QF',
};
