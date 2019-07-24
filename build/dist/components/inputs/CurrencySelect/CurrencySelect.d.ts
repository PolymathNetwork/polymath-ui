/// <reference types="styled-components" />
import React, { ReactNode } from 'react';
import { types } from "../../../misc";
import { EnhancedComponentProps } from "../FormikProxy";
import { ThemeInterface } from "../../../styles";
import { InputProps } from "../types";
interface OptionType {
    value: types.Tokens;
    label: ReactNode;
    isDisabled?: boolean;
}
declare type Value = types.Tokens | types.Tokens[];
interface ExternalProps extends EnhancedComponentProps<Value> {
    theme: ThemeInterface;
    options: OptionType[];
    placeholder?: string;
}
export declare const CURRENCY_OPTIONS: OptionType[];
interface SelectProps extends Pick<InputProps, 'onChange' | 'error' | 'name' | 'autoComplete'> {
    theme: ThemeInterface;
    options: OptionType[];
    value: types.Tokens | types.Tokens[];
    onBlur: () => void;
    placeholder?: string;
    disabledOptionText?: string;
}
export declare const CurrencySelectPrimitive: React.ForwardRefExoticComponent<Pick<SelectProps, "options" | "name" | "onBlur" | "onChange" | "placeholder" | "value" | "autoComplete" | "error" | "disabledOptionText"> & {
    theme?: ThemeInterface | undefined;
}>;
export declare const CurrencySelect: React.FunctionComponent<ExternalProps>;
export {};
//# sourceMappingURL=CurrencySelect.d.ts.map