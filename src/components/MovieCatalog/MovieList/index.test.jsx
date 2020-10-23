import React from 'react';
import renderer from 'react-test-renderer';

import MovieList from './index';

describe('Components - MovieList', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<MovieList />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
