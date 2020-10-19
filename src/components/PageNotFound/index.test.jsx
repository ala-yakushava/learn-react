import React from 'react';
import renderer from 'react-test-renderer';

import PageNotFound from './index';

describe('Components - PageNotFound', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<PageNotFound />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
