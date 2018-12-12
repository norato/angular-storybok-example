import { storiesOf, moduleMetadata } from '@storybook/angular';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { AppModule } from 'src/app/app.module';

const metadata = moduleMetadata({
  imports: [AppModule]
});

storiesOf('Addons | Knobs', module)
  .addDecorator(metadata)
  .addDecorator(withKnobs)
  .add('story name', () => ({
    template: `
    <app-other
      [content]="content"
      [showInput]="showInput">
    </app-other>
    <h2>Click at <b>KNOBS</b> at the menu above to edit component values</h2>
  `,
    props: {
      content: text('content', 'A default context'),
      showInput: boolean('showInput')
    }
  }));
