import React from 'react';

import { render, fireEvent, screen } from 'utils/test-utils';

import Modal from './index';

describe('<Modal />', () => {
  it('should render the modal open true', () => {
    const { container } = render(<Modal open>Modal</Modal>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the modal and click event in close button', () => {
    const onClose = jest.fn();
    render(
      <Modal open onClose={onClose}>
        Modal
      </Modal>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should render the modal with button cancel', () => {
    const { container } = render(
      <Modal open cancel="cancelar">
        Modal
      </Modal>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the modal with button cancel and click event', () => {
    const onCancel = jest.fn();
    render(
      <Modal open cancel="cancelar" onCancel={onCancel}>
        Modal
      </Modal>
    );

    fireEvent.click(screen.getByText('cancelar'));
    expect(onCancel).toHaveBeenCalled();
  });

  it('should render the modal with button approve', () => {
    const { container } = render(
      <Modal open approve="aprovar">
        Modal
      </Modal>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the modal with button approve and click event', () => {
    const onApprove = jest.fn();
    render(
      <Modal open approve="aprovar" onApprove={onApprove}>
        Modal
      </Modal>
    );

    fireEvent.click(screen.getByText('aprovar'));
    expect(onApprove).toHaveBeenCalled();
  });
});
