import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { metadata } from '../utils';

storiesOf('Addons | Actions', module)
  .addDecorator(metadata)
  .add('story name', () => ({
    template: `
    <app-other
      [showInput]="true"
      (inputValue)="keyPressed($event)"
      (submitValue)="formValue($event)">
    </app-other>
    <h2>Click at <b>ACTION LOGGER</b> at the menu above to see the action</h2>
  `,
    props: {
      keyPressed: action('keyPressed'),
      formValue: action('formValue')
    }
  }));
