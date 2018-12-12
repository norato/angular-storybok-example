import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import * as markdownFile from './example.md';

const markdown = `
# My Inline Markdown

We can write some docs here

## Subtitle
`;

storiesOf('Addons | Notes', module)
  .add(
    'text',
    withNotes({ text: 'My simple text note' })(() => ({
      template: `
        <h1>Note with simple text example</h1>
        <h2>Click at <b>NOTES</b> at the menu above</h2>
      `
    }))
  )
  .add(
    'inline markdown',
    withNotes({ markdown })(() => ({
      template: `
        <h1>Note with inline markdown example</h1>
        <h2>Click at <b>NOTES</b> at the menu above</h2>
      `
    }))
  )
  .add(
    'import markdown file',
    withNotes({ markdown: markdownFile })(() => ({
      template: `
        <h1>Note with markdown file example</h1>
        <h2>Click at <b>NOTES</b> at the menu above</h2>
      `
    }))
  );
