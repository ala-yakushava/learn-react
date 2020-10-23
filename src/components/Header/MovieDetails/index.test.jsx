import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from './index';
import { movie } from '../../../utils/mock-data';

describe('Components - MovieDetails', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <MovieDetails movie={movie} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
