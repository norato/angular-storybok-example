import { Meta } from '@storybook/angular';

export default {
  title: 'Addons / Backgrounds',
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  }
} as Meta;

export const Default = () => ({
  template: 
    `<h2>Click at <b>BACKGROUNDS</b> at the menu above to change de background color</h2>`
  ,
  props: {},
});
