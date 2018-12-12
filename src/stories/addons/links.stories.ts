import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
import { linkTo } from '@storybook/addon-links';

storiesOf('Addons | Links', module).add('default', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome')
  }
}));
