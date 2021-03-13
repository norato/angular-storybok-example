import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button } from '@storybook/angular/demo';

export default {
  title: 'Default Storybook / Button',
};

export const Default = () => ({
  component: Button,
  props: {
    text: 'Hello Button'
  }
});

Default.storyName = 'with text';

export const WithEmoji = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯'
  }
});

WithEmoji.storyName = 'with some emoji';

export const WithEmojiAndAction = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
    onClick: action('This was clicked OMG')
  }
});

WithEmojiAndAction.storyName = 'with some emoji and action';

export const WithEmojiAndLink = () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome')
  }
});

WithEmojiAndLink.storyName = 'button with link to another story';





