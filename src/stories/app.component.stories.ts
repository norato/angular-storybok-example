import { withTests } from '@storybook/addon-jest';

import results from '../../jest-test-results.json';
import { AppComponent } from './../app/app.component';
import { metadata } from './utils/utils';


export default {
  title: 'Custom / Angular / App Component',
};

export const Default = () => ({
  component: AppComponent,
  decorators: [metadata, withTests({ results })]
});

Default.parameters = {
  jest: ['app.component.spec.ts']
}