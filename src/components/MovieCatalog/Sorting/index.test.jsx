import React from 'react';
import renderer from 'react-test-renderer';

import Sorting from './index';
import { sortItems } from '../../../utils/data';

describe('Components - Sorting', () => {
  const handleChange = jest.fn();

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <Sorting sortingItems={sortItems} defaultValue="release_date" onChange={handleChange} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
