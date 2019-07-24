import { Component, ReactNode } from 'react';
import { FieldProps, FormikProps } from 'formik';
export interface RenderProps<Value> {
    value: Value;
    name: string;
    onChange: (value: Value) => void;
    onBlur: () => void;
}
interface FormikExternalProps {
    field: Pick<FieldProps['field'], 'name' | 'value'>;
    form: Pick<FormikProps<any>, 'setFieldValue' | 'setFieldTouched'>;
}
export interface EnhancedComponentProps<ValueType> extends FormikExternalProps {
    onChange?: (value: ValueType) => void;
    onBlur?: () => void;
}
interface Props<ValueType> extends EnhancedComponentProps<ValueType> {
    render: (props: RenderProps<ValueType>) => ReactNode;
}
export declare class FormikProxy<ValueType> extends Component<Props<ValueType>> {
    handleChange: (newValue: ValueType) => void;
    handleBlur: () => void;
    render(): ReactNode;
}
export {};
//# sourceMappingURL=FormikProxy.d.ts.map