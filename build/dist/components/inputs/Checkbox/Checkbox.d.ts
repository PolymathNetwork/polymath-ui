import React, { FC } from 'react';
import { EnhancedComponentProps } from '../FormikProxy';
interface Props {
    onChange: (e: any) => void;
    /**
     * Specify whether the toggle should be on by default
     */
    defaultChecked?: boolean;
    /**
     * Specify whether the control is checked
     */
    checked?: boolean;
    name?: React.AllHTMLAttributes<HTMLInputElement>['name'];
    label?: React.ComponentType | string;
}
export declare const CheckboxPrimitive: FC<Props>;
export declare const Checkbox: React.FunctionComponent<EnhancedComponentProps<boolean>>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map