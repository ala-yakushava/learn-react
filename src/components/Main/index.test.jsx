import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Main from './index';

jest.mock('../MovieCatalog', () => () => (
  <div data-testid="MovieCatalog" />
));

describe('Components - Main', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <Main>
          <div>Content</div>
        </Main>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should be render MovieCatalog', () => {
    const { queryByTestId } = render(
      <Main>
        <div>Content</div>
      </Main>,
    );

    expect(queryByTestId('MovieCatalog')).toBeInTheDocument();
  });
});
