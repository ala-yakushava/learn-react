import React from 'react';
import renderer from 'react-test-renderer';

import DeleteMovieDialog from './index';

describe('Components - DeleteMovieDialog', () => {
  const handleClick = jest.fn();

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <DeleteMovieDialog onClick={handleClick} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
