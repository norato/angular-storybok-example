import { Button } from '@storybook/angular/demo';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Addons / Links',
};

export const Default = () => ({
  component: Button,
  props: {
    text: 'Go to Addons / Actions',
    onClick: linkTo('Addons / Actions')
  }
});
