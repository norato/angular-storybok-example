import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { metadata } from './utils';

storiesOf('Custom | Angular / Example Component', module)
  .addDecorator(metadata)
  .add(
    'with props in template',
    () => ({
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
    }),
    { jest: 'example.component' }
  );
