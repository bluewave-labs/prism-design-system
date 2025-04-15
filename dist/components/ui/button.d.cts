import { B as ButtonProps } from '../../button.d-CSnSpV4C.cjs';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import 'react';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "action" | "outline" | "outline_active" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "md" | "lg" | "icon" | null | undefined;
    rounded?: "default" | "sm" | "md" | "lg" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, rounded, asChild, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button, buttonVariants };
