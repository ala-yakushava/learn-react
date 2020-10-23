import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './index';

jest.mock('../MovieCatalog', () => () => (
  <div data-testid="MovieCatalog" />
));

describe('Components - App', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <App>
          <div>Content</div>
        </App>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should be render MovieCatalog', () => {
    const { queryByTestId } = render(
      <App>
        <div>Content</div>
      </App>,
    );

    expect(queryByTestId('MovieCatalog')).toBeInTheDocument();
  });
});
