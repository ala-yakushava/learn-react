import React from 'react';
import renderer from 'react-test-renderer';

import ModalFooter from './index';

describe('Components - ModalFooter', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <ModalFooter>
          <div>Content</div>
        </ModalFooter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
