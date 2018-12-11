import { storiesOf } from '@storybook/angular';

storiesOf('Raw Html Story', module).add('default', () => ({
  template: `
    <div style="diaplay: block;">
      <h1 style="color: red;">here is a only html + in-line css story</h1>
    </div>
  `
}));
