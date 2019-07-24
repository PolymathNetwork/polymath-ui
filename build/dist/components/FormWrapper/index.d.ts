import React from 'react';
import { Formik, FormikValues, FormikConfig } from 'formik';
export interface Props<Values> extends FormikConfig<Values> {
    onFieldChange?: (field: string, value: any) => void;
}
export declare class FormWrapper<Values extends FormikValues> extends React.Component<Props<Values>> {
    formRef: React.RefObject<Formik<Values>>;
    constructor(props: Props<Values>);
    componentDidMount(): void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => false | void;
    setSubmitting: (value: boolean) => false | void;
    render(): JSX.Element;
}
//# sourceMappingURL=index.d.ts.map