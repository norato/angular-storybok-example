import { addDecorator, configure } from '@storybook/angular';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withTests } from '@storybook/addon-jest';
import '@storybook/addon-console';

import results from '../jest-test-results.json';

addDecorator(
  withOptions({
    name: 'Angular Storybook Example',
    url: 'https://gitlab.com/norato/angular-storybok-example',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/
  })
);

addDecorator(withKnobs); // Addon Knob available for all stories

addDecorator(
  // Addon Backgrounds configured for all stories
  withBackgrounds([
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' }
  ])
);

addDecorator(
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$'
  })
);

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
