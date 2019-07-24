import React, { Component } from 'react';
import { typeHelpers } from "../../../misc";
import { EnhancedComponentProps } from '../FormikProxy';
export interface TextAreaProps extends typeHelpers.Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
    error?: string;
    onChange: (value?: string) => void;
}
export declare class TextAreaPrimitive extends Component<TextAreaProps> {
    static defaultProps: {
        onChange: () => void;
    };
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
export declare const TextArea: React.FunctionComponent<EnhancedComponentProps<string | undefined>> & {
    defaultProps: {
        onChange: () => void;
    };
};
//# sourceMappingURL=TextArea.d.ts.map