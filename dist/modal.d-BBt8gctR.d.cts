import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type DialogContentRef = React.ComponentRef<typeof DialogPrimitive.Content>;
type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

type ModalProps = {
  modalTrigger: ReactNode | string;
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  open?: boolean;
  modal?: boolean;
};

export type { DialogContentProps as D, ModalProps as M, DialogContentRef as a };
