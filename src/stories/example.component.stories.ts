import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AppModule } from './../app/app.module';

const metadata = moduleMetadata({
  imports: [AppModule]
});

storiesOf('Example Component', module)
  .addDecorator(metadata)
  .add('default', () => ({
    template: `<app-example></app-example>`,
    props: {}
  }))
  .add('with props', () => ({
    template: `<app-example [text]="variable"></app-example>`,
    props: {
      variable: 'amazing variable'
    }
  }));
