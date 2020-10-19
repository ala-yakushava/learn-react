import React from 'react';
import renderer from 'react-test-renderer';

import ErrorBoundary from './index';

describe('Components - ErrorBoundary', () => {
  const Child = () => new Error('Something went broke!');

  test('should match snapshot without error', () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <div>Content</div>
        </ErrorBoundary>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should match snapshot with error', () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
