import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, DialogFooter, DialogHeader, Modal, ModalProps } from '../components';
import '../style/globals.css';

let setOpenModal: (open: boolean) => void;

const RenderModal = (args: ModalProps) => {
  const [open, setOpen] = React.useState(args.defaultOpen);
  setOpenModal = setOpen;
  return (
    <Modal {...args} open={open} onOpenChange={setOpen}>
      {args.children}
    </Modal>
  );
};
const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    modalTrigger: {
      control: 'text',
      description: 'The trigger for the modal, can be a string or a ReactNode.',
      table: {
        type: { summary: 'string | ReactNode' },
        defaultValue: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the modal.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'ReactNode' },
      },
    },
    onOpenChange: {
      control: {
        accept: 'function',
      },
      description: 'Callback function when the modal open state changes.',
      table: {
        type: { summary: '(open: boolean) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the modal is open by default.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    modalTrigger: 'Open Modal',
    children: 'This is the modal content.',
    defaultOpen: false,
  },
  render: (args) => <RenderModal {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const CustomCloseBtn: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <DialogHeader>
          <h2 className="text-lg font-semibold">Custom Close Button</h2>
          <p>This is a modal with a custom close button.</p>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setOpenModal(false)} variant="secondary">
            Close
          </Button>
        </DialogFooter>
      </>
    ),
  },
};
