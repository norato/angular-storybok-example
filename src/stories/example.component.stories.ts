import { withTests } from '@storybook/addon-jest';
import { boolean } from '@storybook/addon-knobs';

import results from '../../jest-test-results.json';
import { metadata } from './utils/utils';

export default {
  title: 'Custom / Angular / Example Component',
  decorators: [metadata, withTests({ results })]
};

export const Default = () => ({
  template: `
    <app-grid-overlay *ngIf="showgrid"></app-grid-overlay>
    <div class="box">
      <app-example [text]="variable"></app-example>
    </div>
    `,
  props: {
    variable: 'amazing variable',
    showgrid: boolean('Show Grid Overlay', false)
  }
}
);

Default.storyName = 'with props in template';
Default.parameters = {
  jest: ['example.component.spec.ts']
}
