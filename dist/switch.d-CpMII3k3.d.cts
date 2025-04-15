import * as SwitchPrimitives from '@radix-ui/react-switch';
import React__default from 'react';

interface CustomSwitchProps {
  size?: 'sm' | 'default';
}

// Combined props (you can rename this to match your naming style)
type SwitchProps = React__default.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & CustomSwitchProps;

type SwitchRef = React__default.ComponentRef<typeof SwitchPrimitives.Root>;

export type { CustomSwitchProps as C, SwitchProps as S, SwitchRef as a };
