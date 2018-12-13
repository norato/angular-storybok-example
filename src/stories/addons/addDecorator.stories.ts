import { storiesOf } from '@storybook/angular';
import { gridWrap } from './wrap';
import { boolean } from '@storybook/addon-knobs';
import { metadata } from '../utils';

storiesOf('Addons | addDecorator', module)
  .addDecorator(gridWrap) // Decorator to add the grid-overlay component to stories
  .addDecorator(metadata)
  .add('wrapper template', () => ({
    template: `<h1>test</h1>`,
    props: { showgrid: boolean('Show Grid Overlay', false) }
  }));
