import { addDecorator } from '@storybook/angular';
import { withTests } from '@storybook/addon-jest';

import results from '../jest-test-results.json';

addDecorator(
    withTests({
        results,
        filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
    })
);