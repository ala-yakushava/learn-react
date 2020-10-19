import React from 'react';
import renderer from 'react-test-renderer';

import MovieNotFound from './index';

describe('Components - MovieNotFound', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<MovieNotFound />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
