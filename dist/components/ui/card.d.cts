import * as class_variance_authority_types from 'class-variance-authority/types';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { B as ButtonProps } from '../../button.d-CSnSpV4C.cjs';

type CardContext = {
    isHovered: boolean;
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
};
declare const CardContext: React.Context<CardContext | undefined>;
declare function useCardContext(): CardContext;
declare function CardProvider({ children }: {
    readonly children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare const cardVariants: (props?: ({
    variant?: "default" | "clickable" | "console" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Card({ className, variant, asChild, ...props }: React.ComponentProps<'div'> & VariantProps<typeof cardVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function ConsoleButton({ className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Card, CardAction, CardContent, CardContext, CardDescription, CardFooter, CardHeader, CardProvider, CardTitle, ConsoleButton, useCardContext };
