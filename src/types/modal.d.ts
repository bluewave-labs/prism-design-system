import { ReactNode } from 'react';

export type ModalProps = {
  modalTrigger: ReactNode | string;
  modalTitle?: ReactNode;
  modalDescription?: ReactNode;
  modalContent?: ReactNode;
  modalFooter?: ReactNode;
  customModalClose?: ReactNode;
};
