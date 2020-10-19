import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './index';

describe('Components - Logo', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<Logo />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
