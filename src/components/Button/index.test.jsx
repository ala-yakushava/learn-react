import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';

describe('Components - Button', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <Button>
          Click me!
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
