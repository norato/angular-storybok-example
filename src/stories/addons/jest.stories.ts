import { AppComponent } from './../../app/app.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Addons | Jest', module).add(
  'default',
  () => ({
    component: AppComponent
  }),
  { jest: 'app.component' }
);
