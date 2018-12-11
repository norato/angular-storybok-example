import { storiesOf } from '@storybook/angular';
import { OtherComponent } from 'src/app/other/other.component';

storiesOf('OtherComponent', module).add('default', () => ({
  component: OtherComponent,
  props: {
    content: 'It is a prop passing a content'
  }
}));
