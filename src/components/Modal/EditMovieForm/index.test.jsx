import React from 'react';
import renderer from 'react-test-renderer';

import EditMovieForm from './index';

describe('Components - EditMovieForm', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<EditMovieForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
