import { storiesOf, moduleMetadata } from '@storybook/angular';
import { OtherComponent } from 'src/app/other/other.component';
import { ReactiveFormsModule } from '@angular/forms';

storiesOf('Custom | Angular / OtherComponent', module)
  .addDecorator(moduleMetadata({ imports: [ReactiveFormsModule] }))
  .add(
    'default',
    () => ({
      component: OtherComponent,
      props: {
        content: 'It is a prop passing a content'
      }
    }),
    { jest: 'other.component' }
  );
