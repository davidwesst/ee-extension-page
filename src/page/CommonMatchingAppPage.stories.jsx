import React from 'react';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { EDSApplication } from '@ellucian/react-design-system/core';

import CommonMatchingAppPage, { styles } from './CommonMatchingAppPage';

const meta = {
  component: withStyles(styles)(CommonMatchingAppPage),
  decorators: [
    (Story) => (
      <div>
        <EDSApplication>
          <Story />
        </EDSApplication>
      </div>
    )
  ]
};

export default meta;

export const Default = {};