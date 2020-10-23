import React from 'react';
import renderer from 'react-test-renderer';

import AddMovieForm from './index';

describe('Components - AddMovieForm', () => {
  const handleSubmit = jest.fn();

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <AddMovieForm onSubmit={handleSubmit} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
