import React from 'react';
import renderer from 'react-test-renderer';

import Filter from './index';
import { filterItems } from '../../../utils/data';

describe('Components - Filter', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<Filter filterItems={filterItems} defaultValue="All" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
