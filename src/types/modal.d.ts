import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

export type DialogContentRef = React.ComponentRef<typeof DialogPrimitive.Content>;
export type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

export type ModalProps = {
  modalTrigger: ReactNode | string;
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  open?: boolean;
  modal?: boolean;
};
