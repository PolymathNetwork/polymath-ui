import React from 'react';
import { StyledProps } from 'styled-components';
import { TLengthStyledSystem } from 'styled-system';
export interface IconProps extends StyledProps<any> {
    Asset: React.ComponentType<React.SVGAttributes<SVGElement>>;
    width: TLengthStyledSystem;
    height: TLengthStyledSystem;
    color?: string;
    scale?: number;
    rotate?: string;
}
export declare const Icon: import("styled-components").StyledComponent<React.FunctionComponent<IconProps>, any, IconProps, never>;
export declare const IconDocz: (props: IconProps) => JSX.Element;
//# sourceMappingURL=Icon.d.ts.map