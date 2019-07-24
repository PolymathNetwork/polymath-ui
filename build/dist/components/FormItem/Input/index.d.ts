import React, { FC } from 'react';
import { FieldConfig } from 'formik';
import { typeHelpers } from "../../../misc";
export interface Props extends typeHelpers.Omit<FieldConfig, 'name' | 'component'> {
    FormikComponent: React.ComponentType<FieldConfig>;
    component: React.ComponentType<any>;
    inputProps?: {
        [key: string]: any;
    };
    onChange?: (value: any) => void;
    onBlur?: () => void;
}
export declare const InputBase: FC<Props>;
export declare const Input: React.FunctionComponent<Props> & {
    defaultProps: {
        FormikComponent: React.ComponentType<any>;
    };
};
//# sourceMappingURL=index.d.ts.map