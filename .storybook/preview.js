// Ensure the global `contexts` mock is loaded for all stories
import './contexts-mock';
import './react-18.shim';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;