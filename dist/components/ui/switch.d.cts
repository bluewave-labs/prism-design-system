import { C as CustomSwitchProps } from '../../switch.d-CpMII3k3.cjs';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & CustomSwitchProps & React.RefAttributes<HTMLButtonElement>>;

export { Switch };
