import { ModalProps } from '../../types';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

export const Modal = ({ modalTrigger, children, ...props }: ModalProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild={typeof modalTrigger !== 'string'}>{modalTrigger}</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
