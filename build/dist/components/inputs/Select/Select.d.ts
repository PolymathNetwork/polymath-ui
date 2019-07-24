/// <reference types="styled-components" />
import React from 'react';
import { Props as ReactSelectProps } from 'react-select/lib/Select';
import { typeHelpers } from "../../../misc";
import { ThemeInterface } from "../../../styles";
import { Selects } from "../../../styles/types";
import { EnhancedComponentProps } from '../FormikProxy';
interface Props<OptT extends any = any> extends typeHelpers.Omit<ReactSelectProps<OptT>, 'theme' | 'onChange' | 'onBlur'> {
    theme: ThemeInterface;
    onChange: (value: OptT['value']) => void;
    onBlur: () => void;
    variant: keyof Selects;
    name?: string;
}
export declare const SelectPrimitive: React.ForwardRefExoticComponent<Pick<Props<any>, "options" | "name" | "className" | "id" | "tabIndex" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "defaultValue" | "placeholder" | "aria-label" | "aria-labelledby" | "autoFocus" | "value" | "variant" | "backspaceRemovesValue" | "blurInputOnSelect" | "captureMenuScroll" | "classNamePrefix" | "closeMenuOnSelect" | "closeMenuOnScroll" | "components" | "controlShouldRenderValue" | "delimiter" | "escapeClearsValue" | "filterOption" | "formatGroupLabel" | "formatOptionLabel" | "getOptionLabel" | "getOptionValue" | "hideSelectedOptions" | "inputValue" | "inputId" | "instanceId" | "isClearable" | "isDisabled" | "isLoading" | "isOptionDisabled" | "isOptionSelected" | "isMulti" | "isRtl" | "isSearchable" | "loadingMessage" | "minMenuHeight" | "maxMenuHeight" | "menuIsOpen" | "menuPlacement" | "menuPosition" | "menuPortalTarget" | "menuShouldBlockScroll" | "menuShouldScrollIntoView" | "noOptionsMessage" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "onMenuScrollToTop" | "onMenuScrollToBottom" | "openMenuOnFocus" | "openMenuOnClick" | "pageSize" | "screenReaderStatus" | "styles" | "tabSelectsValue" | "defaultInputValue" | "defaultMenuIsOpen"> & {
    theme?: ThemeInterface | undefined;
}> & {
    defaultProps: {
        isClearable: boolean;
        variant: string;
    };
};
export declare const Select: React.FunctionComponent<EnhancedComponentProps<any>> & {
    defaultProps: Partial<Pick<Props<any>, "options" | "name" | "className" | "id" | "tabIndex" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "defaultValue" | "placeholder" | "aria-label" | "aria-labelledby" | "autoFocus" | "value" | "variant" | "backspaceRemovesValue" | "blurInputOnSelect" | "captureMenuScroll" | "classNamePrefix" | "closeMenuOnSelect" | "closeMenuOnScroll" | "components" | "controlShouldRenderValue" | "delimiter" | "escapeClearsValue" | "filterOption" | "formatGroupLabel" | "formatOptionLabel" | "getOptionLabel" | "getOptionValue" | "hideSelectedOptions" | "inputValue" | "inputId" | "instanceId" | "isClearable" | "isDisabled" | "isLoading" | "isOptionDisabled" | "isOptionSelected" | "isMulti" | "isRtl" | "isSearchable" | "loadingMessage" | "minMenuHeight" | "maxMenuHeight" | "menuIsOpen" | "menuPlacement" | "menuPosition" | "menuPortalTarget" | "menuShouldBlockScroll" | "menuShouldScrollIntoView" | "noOptionsMessage" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "onMenuScrollToTop" | "onMenuScrollToBottom" | "openMenuOnFocus" | "openMenuOnClick" | "pageSize" | "screenReaderStatus" | "styles" | "tabSelectsValue" | "defaultInputValue" | "defaultMenuIsOpen"> & {
        theme?: ThemeInterface | undefined;
    }> & {
        isClearable: boolean;
        variant: string;
    };
};
export declare type SelectProps = typeHelpers.GetProps<typeof Select>;
export {};
//# sourceMappingURL=Select.d.ts.map