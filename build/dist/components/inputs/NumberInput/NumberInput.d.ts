import React, { Component } from 'react';
import BigNumber from 'bignumber.js';
import { EnhancedComponentProps } from '../FormikProxy';
declare type Value = number | BigNumber | null;
interface Props {
    max: number | BigNumber;
    min: number | BigNumber;
    maxDecimals: number;
    useBigNumbers: boolean;
    value: Value;
    name: string;
    onChange: (value: Value) => void;
    onBlur: () => void;
}
interface State {
    oldValue: null;
    displayValue: string;
}
export declare class NumberInputPrimitive extends Component<Props, State> {
    static defaultProps: {
        onChange: () => void;
        onBlur: () => void;
        min: number;
        max: number;
        maxDecimals: number;
        useBigNumbers: boolean;
        value: null;
        name: string;
    };
    static getDisplayValue(value: Value, props: Props): string;
    static isBigNumber(value: any): any;
    static getDerivedStateFromProps(props: Props, state: State): {
        displayValue: string;
        oldValue: Value;
    } | null;
    /**
     * Transforms a value into a BigNumber instance while enforcing
     * numeric restrictions
     */
    static toBigNumber(v: number | string | BigNumber, { min, max, useBigNumbers, maxDecimals }: Props): BigNumber;
    /**
     * Determines wether or not displayValue is in an "intermediate state" which
     * means that it cannot be cleaned up as it needs more input from the user.
     * to determine what the next value will be. For example "0." or "12.00"
     *
     * @param displayValue The value in the input that the user sees
     */
    static isInIntermediateState(displayValue: string): boolean;
    /**
     * Wether or not the display value is valid. If this returns false the
     * display value will revert to its previous state
     *
     * @returns boolean
     */
    static isValidDisplayValue(value: string, maxDecimals: number): boolean;
    state: {
        displayValue: string;
        oldValue: null;
    };
    /**
     * Cleans up and formats the display value shown in the UI
     *
     * @param nextDisplayValue the value to sanitize
     */
    sanitizeDisplayValue: (nextDisplayValue: string) => string;
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export declare const NumberInput: React.FunctionComponent<EnhancedComponentProps<Value>> & {
    defaultProps: {
        onChange: () => void;
        onBlur: () => void;
        min: number;
        max: number;
        maxDecimals: number;
        useBigNumbers: boolean;
        value: null;
        name: string;
    };
};
export {};
//# sourceMappingURL=NumberInput.d.ts.map