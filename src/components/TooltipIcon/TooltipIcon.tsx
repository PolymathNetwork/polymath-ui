import React, { FC } from 'react';
import { typeHelpers } from '~/misc';
import { Tooltip } from '~/components/Tooltip';
import * as sc from './styles';
import { SvgInfo } from '../../images/icons/Info';

type TooltipProps = typeHelpers.GetProps<typeof Tooltip>;

export interface TooltipIconProps extends TooltipProps {}

export const TooltipIcon: FC<TooltipIconProps> = ({ children }) => (
  <sc.Icon Asset={SvgInfo} width={16} height={16}>
    <sc.Tooltip>{children}</sc.Tooltip>
  </sc.Icon>
);
