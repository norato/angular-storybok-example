import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/angular';
import { metadata } from '../utils';

export default {
  title: 'Addons / Knobs',
  decorators: [withKnobs, metadata],
} as Meta;

export const Default = () => {
  const content = text('content', 'A default context');
  const showInput = boolean('showInput', false);

  return {
    template: `
    <app-other
      [content]="content"
      [showInput]="showInput">
    </app-other>
    <h2>Click at <b>KNOBS</b> at the menu above to edit component values</h2>
  `,
    props: {
      content, showInput
    },
  }
};
