import React from 'react';
import renderer from 'react-test-renderer';

import FindMovieForm from './index';

describe('Components - FindMovieForm', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<FindMovieForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
