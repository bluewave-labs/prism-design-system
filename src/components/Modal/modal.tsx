import { ModalProps } from '../../types';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

export const Modal = ({ modalTrigger, modalContent }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild={typeof modalTrigger !== 'string'}>{modalTrigger}</DialogTrigger>
      <DialogContent>{modalContent}</DialogContent>
    </Dialog>
  );
};

export default Modal;
