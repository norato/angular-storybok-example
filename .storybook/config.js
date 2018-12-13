import { addDecorator, configure } from '@storybook/angular';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'Angular Storybook Example',
    url: 'https://gitlab.com/norato/angular-storybok-example',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/
  })
);

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
