import { storiesOf } from '@storybook/angular';
import { withBackgrounds } from '@storybook/addon-backgrounds';

storiesOf('Addons | Backgrounds', module)
  .addDecorator(
    withBackgrounds([
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' }
    ])
  )
  .add('default', () => ({
    template: `<h2>Click at <b>BACKGROUNDS</b> at the menu above to change de background color</h2>`
  }));
