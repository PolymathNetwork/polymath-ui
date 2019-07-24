import React from 'react';
import PopperJS from 'popper.js';
import { Options } from 'tooltip.js';
export interface TooltipProps extends Options {
    role?: string;
    placement?: PopperJS.Placement;
    className?: string;
}
export declare class TooltipComponent extends React.Component<TooltipProps> {
    static defaultProps: {
        role: string;
        placement: string;
    };
    private popper?;
    getOptions: () => Options;
    initPopper: () => void;
    destroyPopper: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: TooltipProps & Readonly<{
        children?: React.ReactNode;
    }>): void;
    render(): JSX.Element;
    private getPopover;
    private modifier;
}
export declare const Tooltip: import("styled-components").StyledComponent<typeof TooltipComponent, import("../../styles").ThemeInterface, TooltipProps, never>;
//# sourceMappingURL=Tooltip.d.ts.map