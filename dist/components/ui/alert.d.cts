import * as React from 'react';

declare const Alert: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "destructive" | "closeable";
    isOpen?: boolean;
    onClose?: () => void;
} & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

export { Alert, AlertDescription, AlertTitle };
