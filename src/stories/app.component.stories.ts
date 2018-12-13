import { AppComponent } from './../app/app.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Custom | Angular / AppComponent', module).add(
  'defalt',
  () => ({
    component: AppComponent
  }),
  { jest: 'app.component' }
);
