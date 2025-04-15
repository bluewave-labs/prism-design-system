import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

declare function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): react_jsx_runtime.JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): react_jsx_runtime.JSX.Element;

export { Avatar, AvatarFallback, AvatarImage };
