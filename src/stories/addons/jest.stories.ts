import { withTests } from '@storybook/addon-jest';

import results from '../../../jest-test-results.json';
import { metadata } from '../utils/utils';
import { AppComponent } from './../../app/app.component';


export default {
  title: 'Addons / Jest',
  decorators: [metadata, withTests({ results })]
};

export const Default = () => ({
  component: AppComponent,
}
);

Default.parameters = {
  jest: ['app.component.spec.ts']
}