import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './index';

describe('Components - Footer', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
