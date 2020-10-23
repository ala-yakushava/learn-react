import React from 'react';
import renderer from 'react-test-renderer';

import Heading from './index';

describe('Components - Heading', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<Heading />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
