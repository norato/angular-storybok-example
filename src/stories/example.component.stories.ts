import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AppModule } from './../app/app.module';

const metadata = moduleMetadata({
  imports: [AppModule]
});

storiesOf('Example Component', module)
  .addDecorator(metadata)
  .add('with props in template', () => ({
    template: `
    <div class="box">
      <app-example [text]="variable"></app-example>
    </div>
    `,
    props: {
      variable: 'amazing variable'
    }
  }));
