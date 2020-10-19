import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Modal from './index';

describe('Components - Modal', () => {
  const Child = () => <div>Forms</div>;
  const handleClick = jest.fn();

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element);

    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    const body = document.querySelector('body');
    body.appendChild(modalRoot);
  });

  afterAll(() => {
    ReactDOM.createPortal.mockClear();
  });

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <Modal onClick={handleClick}>
          <Child />
        </Modal>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should mount modal to document', () => {
    const { getByTestId, getByRole } = render(
      <Modal onClick={handleClick}>
        <Child />
      </Modal>,
    );

    expect(getByTestId('modal')).toBeInTheDocument();

    userEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
