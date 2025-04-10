import { ModalProps } from '../../types';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export const Modal = (props: ModalProps) => {
  const { modalTrigger, modalContent, customModalClose, modalDescription, modalFooter, modalTitle } = props;
  const optionalProps = ['modalContent', 'modalDescription', 'modalTitle'];
  const isDefined = Object.keys(props).some((prop) => {
    if (optionalProps.includes(prop) && props[prop as keyof ModalProps] !== undefined) {
      return true;
    }
    return false;
  });
  if (!isDefined) {
    console.error('Modal: Missing required props');
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild={typeof modalTrigger !== 'string'}>{modalTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {modalTitle && <DialogTitle asChild={typeof modalTitle !== 'string'}>{modalTitle}</DialogTitle>}
          {modalDescription && <DialogDescription asChild={typeof modalDescription !== 'string'}>{modalDescription}</DialogDescription>}
        </DialogHeader>
        {!!modalContent && modalContent}
        {modalFooter ||
          (customModalClose && (
            <DialogFooter>
              {!!modalFooter && modalFooter}
              {customModalClose && <DialogClose asChild={typeof customModalClose !== 'string'}>{customModalClose}</DialogClose>}
            </DialogFooter>
          ))}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
