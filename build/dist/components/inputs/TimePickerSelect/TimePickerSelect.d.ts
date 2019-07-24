import React, { Component } from 'react';
import { SelectProps } from '../Select';
import { EnhancedComponentProps } from "../FormikProxy";
export declare type TimePickerSelectProps = SelectProps & {
    format: string;
    onChange: (value: number) => void;
    onBlur: () => void;
    value: number;
    onMenuClose: () => void;
};
interface ExternalProps extends EnhancedComponentProps<number> {
    format: string;
    onMenuClose: () => void;
}
export declare class TimePickerSelectPrimitive extends Component<TimePickerSelectProps> {
    static defaultProps: {
        format: string;
        onBlur: () => void;
    };
    handleChange: (value: number) => void;
    render(): JSX.Element;
}
export declare const TimePickerSelect: React.FunctionComponent<ExternalProps>;
export {};
//# sourceMappingURL=TimePickerSelect.d.ts.map