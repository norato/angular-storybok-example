import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AppModule } from './../app/app.module';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const metadata = moduleMetadata({
  imports: [AppModule]
});

storiesOf('Example Component', module)
  .addDecorator(withKnobs)
  .addDecorator(metadata)
  .add('with props in template', () => ({
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
  }));
