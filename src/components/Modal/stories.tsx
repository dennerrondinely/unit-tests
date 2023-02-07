import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from './index';
import Button from 'components/Button';

export default {
  title: 'Modal',
  component: Modal,
  args: {
    title: 'Why do we use it?'
  }
} as Meta;

export const Default: Story<ModalProps> = (args) => (
  <Modal {...args}>Why do we use it?</Modal>
);

export const WithButtons: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);
  return (
    <div>
      <Button onClick={handleModal}>Open Modal</Button>
      <Modal {...args} open={open} onClose={handleModal}>
        Why do we use it?
      </Modal>
    </div>
  );
};

WithButtons.args = {
  cancel: 'Cancelar',
  approve: 'Aprovar'
};
