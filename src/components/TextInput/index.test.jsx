import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from './index';

describe('Components - TextInput', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(<TextInput />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
