import * as SwitchPrimitives from '@radix-ui/react-switch';
import React from 'react';

export type SwitchProps = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>;
