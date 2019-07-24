import React, { Component, ChangeEvent } from 'react';
import flatpickr from 'flatpickr';
import { EnhancedComponentProps } from '../FormikProxy';
import { BaseOptions } from 'flatpickr/dist/types/options';
declare type Value = Date | Date[] | undefined;
interface ExternalProps extends EnhancedComponentProps<Value> {
    minDate: string;
    maxDate: string;
}
interface Props {
    /**
     * The date format.
     */
    dateFormat: string;
    /**
     *  The language locale used to format the days of the week, months, and numbers.
     *  See https://flatpickr.js.org/localization/
     */
    locale: BaseOptions['locale'];
    /**
     * The value of the date value provided to flatpickr
     */
    value?: Value;
    /**
     * The DOM element or selector the Flatpicker should be inserted into. `<body>` by default.
     */
    appendTo: string | HTMLElement;
    /**
     * The `change` event handler.
     */
    onChange: (value: Date) => void;
    onBlur: () => void;
    /**
     * The underlying input `change` event handler.
     */
    onInputChange: (e: ChangeEvent) => void;
    /**
     * The minimum date that a user can start picking from.
     */
    minDate: string;
    /**
     * The maximum date that a user can pick to.
     */
    maxDate: string;
    /**
     * See https://flatpickr.js.org/options/
     */
    datePickerType?: BaseOptions['mode'];
    name: string;
}
export declare type DatePickerInputProps = JSX.LibraryManagedAttributes<typeof DatePickerInputComponent, Props>;
export declare class DatePickerInputComponent extends Component<Props> {
    static defaultProps: {
        dateFormat: string;
        locale: "lt" | "hr" | "th" | "tr" | "default" | "id" | "cy" | "is" | "bg" | "no" | "ar" | "at" | "az" | "be" | "bn" | "bs" | "cat" | "cs" | "da" | "de" | "en" | "eo" | "es" | "et" | "fa" | "fi" | "fo" | "fr" | "gr" | "he" | "hi" | "hu" | "it" | "ja" | "ka" | "ko" | "km" | "kz" | "lv" | "mk" | "mn" | "ms" | "my" | "nl" | "pa" | "pl" | "pt" | "ro" | "ru" | "si" | "sk" | "sl" | "sq" | "sr" | "sv" | "uk" | "vn" | "zh" | "zh_tw" | import("flatpickr/dist/types/locale").CustomLocale;
        datePickerType: "time" | "range" | "multiple" | "single";
        onInputChange: () => void;
        onChange: () => void;
        appendTo: string;
        now: string;
    };
    inputField: React.RefObject<HTMLInputElement>;
    cal: any;
    componentDidUpdate(nextProps: Props): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleChange: flatpickr.Options.Hook;
    handleInputChange: (e: Event) => void;
    addKeyboardEvents: (cal: any) => void;
    rightArrowHTML(): string;
    leftArrowHTML(): string;
    render(): JSX.Element;
}
export declare const DatePickerInput: React.FunctionComponent<ExternalProps> & {
    defaultProps: {
        dateFormat: string;
        locale: "lt" | "hr" | "th" | "tr" | "default" | "id" | "cy" | "is" | "bg" | "no" | "ar" | "at" | "az" | "be" | "bn" | "bs" | "cat" | "cs" | "da" | "de" | "en" | "eo" | "es" | "et" | "fa" | "fi" | "fo" | "fr" | "gr" | "he" | "hi" | "hu" | "it" | "ja" | "ka" | "ko" | "km" | "kz" | "lv" | "mk" | "mn" | "ms" | "my" | "nl" | "pa" | "pl" | "pt" | "ro" | "ru" | "si" | "sk" | "sl" | "sq" | "sr" | "sv" | "uk" | "vn" | "zh" | "zh_tw" | import("flatpickr/dist/types/locale").CustomLocale;
        datePickerType: "time" | "range" | "multiple" | "single";
        onInputChange: () => void;
        onChange: () => void;
        appendTo: string;
        now: string;
    };
};
export {};
//# sourceMappingURL=DatePickerInput.d.ts.map