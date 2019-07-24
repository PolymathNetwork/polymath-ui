import { ButtonHTMLAttributes } from 'react';
import { Buttons } from "../../styles/types";
import { typeHelpers } from "../../misc";
declare type HtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
declare type IconPosition = 'left' | 'right' | 'top' | 'bottom';
export interface Props {
    /**
     * Specify the variant of Button you want to create
     */
    variant: keyof Buttons;
    /**
     * Optional prop to specify the type of the Button
     */
    type?: HtmlButtonProps['type'];
    /**
     * Optionally specify an href for your Button
     */
    href?: string;
    role?: string;
    iconPosition?: IconPosition;
    onClick: () => void;
}
export declare const Button: string & import("styled-components").StyledComponentBase<"button", import("../../styles").ThemeInterface, Props, never> & {
    defaultProps: {
        variant: string;
        onClick: () => void;
    };
};
export declare type ButtonProps = typeHelpers.GetProps<typeof Button>;
export {};
//# sourceMappingURL=Button.d.ts.map