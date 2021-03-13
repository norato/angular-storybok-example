import { boolean } from '@storybook/addon-knobs';

import { metadata } from '../utils/utils';
import { gridWrap } from '../utils/wrap';

export default {
  title: 'Addons / Decorators',
  decorators: [metadata, gridWrap] // Decorator to add the grid-overlay component to stories
};

export const Default = () => ({
  template: `<h1>test</h1>`,
  props: { showgrid: boolean('Show Grid Overlay', false) }
});

Default.storyName = 'wrapper template';
