import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { OtherComponent } from 'src/app/other/other.component';


const metadata = moduleMetadata({
  imports: [ReactiveFormsModule]
});

export default {
  title: 'Custom / Angular / OtherComponent',
  decorators: [metadata]
};

export const Default = () => ({
  component: OtherComponent,
  props: {
    content: 'It is a prop passing a content'
  }
});

Default.parameters = {
  jest: ['other.component.spec.ts']
}