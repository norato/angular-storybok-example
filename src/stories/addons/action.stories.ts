import { action } from '@storybook/addon-actions';

import { metadata } from '../utils/utils';

export default {
  title: 'Addons / Actions',
  decorators: [metadata]
};

export const Default = () => {

  const keyPressed = (e) => {
    console.log(e);
    e.preventDefault();
    action('keyPressed')(e.target.value, 'Another arg');
  };

  const formValue = (e) => {
    console.log(e);
    action('formValue')(e.text, 'Another arg');
  };

  return {
    template: `
    <app-other
      [showInput]="true"
      (inputValue)="keyPressed($event)"
      (submitValue)="formValue($event)">
    </app-other>
    <h2>Click at <b>ACTION LOGGER</b> at the menu above to see the action</h2>
  `,
    props: {
      keyPressed,
      formValue
    },
  };
}
