import * as SwitchPrimitives from '@radix-ui/react-switch';
import React from 'react';

export interface CustomSwitchProps {
  size?: 'sm' | 'default';
}

// Combined props (you can rename this to match your naming style)
export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & CustomSwitchProps;

export type SwitchRef = React.ComponentRef<typeof SwitchPrimitives.Root>;
