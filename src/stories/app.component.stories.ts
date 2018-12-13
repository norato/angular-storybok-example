import { AppComponent } from './../app/app.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Custom | Angular / AppComponent', module).add(
  'default',
  () => ({
    component: AppComponent
  }),
  { jest: 'app.component' }
);
