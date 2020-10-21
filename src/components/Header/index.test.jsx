import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './index';

jest.mock('../../containers/VisibleMovieDetails', () => () => (
  <div data-testid="VisibleMovieDetails" />
));

describe('Components - Header', () => {
  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <Header />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should be render VisibleMovieDetails', () => {
    const { queryByTestId } = render(
      <Header />,
    );

    expect(queryByTestId('VisibleMovieDetails')).toBeInTheDocument();
  });
});
