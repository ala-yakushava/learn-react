import React from 'react';
import renderer from 'react-test-renderer';

import Select from './index';
import { sortItems } from '../../utils/data';

describe('Components - Select', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<Select options={sortItems} value="release_date" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
