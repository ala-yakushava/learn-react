import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from './index';

describe('Components - MovieDetails', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<MovieDetails />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
