import React, { Component } from 'react';
import { EnhancedComponentProps } from '../FormikProxy';
import { InputProps } from '../types';
import { typeHelpers } from "../../../misc";
export interface ToggleInputProps extends InputProps {
    /**
     * Specify whether the toggle should be on by default
     */
    defaultToggled?: boolean;
    /**
     * Specify whether the control is toggled
     */
    toggled?: boolean;
    /**
     * Specify the label for the "off" position
     */
    labelA: string;
    /**
     * Specify the label for the "on" position
     */
    labelB: string;
    checked: boolean;
}
interface ExternalProps extends typeHelpers.Omit<ToggleInputProps, 'onChange' | 'onBlur'>, EnhancedComponentProps<boolean> {
}
export declare class ToggleInputPrimitive extends Component<ToggleInputProps> {
    static defaultProps: {
        defaultToggled: boolean;
        labelA: string;
        labelB: string;
    };
    inputRef: React.RefObject<HTMLInputElement>;
    render(): JSX.Element;
}
export declare const ToggleInput: React.FunctionComponent<ExternalProps>;
export {};
//# sourceMappingURL=index.d.ts.map