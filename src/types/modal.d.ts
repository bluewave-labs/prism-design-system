import { ReactNode } from "react";

export type ModalProps = {
  modalTrigger: ReactNode | string;
  modalContent: ReactNode;
}