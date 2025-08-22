import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Typography, TextLink, EDSApplication } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';

import CommonMatchingAppCard, { styles } from './CommonMatchingAppCard';

const meta = {
  component: withStyles(styles)(CommonMatchingAppCard),
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