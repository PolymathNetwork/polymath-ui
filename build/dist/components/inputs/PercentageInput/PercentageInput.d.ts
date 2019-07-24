import React, { Component } from 'react';
import { EnhancedComponentProps } from '../FormikProxy';
interface Props {
    onChange: (value: number) => void;
    name: string;
    value: number;
}
export declare class PercentageInputPrimitive extends Component<Props> {
    static formatValue: (value: any) => number | "";
    handleKeyPress: (event: React.KeyboardEvent<Element>) => void;
    handlePaste: (event: React.ClipboardEvent<Element>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export declare const PercentageInput: React.FunctionComponent<EnhancedComponentProps<number>>;
export {};
//# sourceMappingURL=PercentageInput.d.ts.map