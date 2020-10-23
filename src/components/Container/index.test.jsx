import React from 'react';
import renderer from 'react-test-renderer';

import Container from './index';

describe('Components - Container', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <Container>
          <div>Content</div>
        </Container>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
