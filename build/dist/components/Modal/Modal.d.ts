/// <reference types="styled-components" />
import React, { FC } from 'react';
import { ThemeInterface } from "../../styles";
import * as sc from './styles';
import { ModalStatus } from './types';
interface Props {
    isOpen: boolean;
    status?: ModalStatus;
    onClose?: () => void;
    className?: string;
    isCloseable?: boolean;
    maxWidth?: number | string;
    isCentered?: boolean;
    theme: ThemeInterface;
}
export declare const ModalBase: FC<Props>;
export declare const Modal: string & import("styled-components").StyledComponentBase<React.ForwardRefExoticComponent<Pick<Props & {
    children?: React.ReactNode;
}, "status" | "maxWidth" | "children" | "className" | "isCentered" | "isOpen" | "isCloseable" | "onClose"> & {
    theme?: ThemeInterface | undefined;
}>, ThemeInterface, sc.StyleProps, never> & {
    defaultProps: Partial<Props>;
    Header: React.FunctionComponent<import("./Header").HeaderProps> & {
        defaultProps: Partial<import("./Header").HeaderProps>;
    };
    Body: import("styled-components").StyledComponent<"div", any, any, never>;
    Footer: import("styled-components").StyledComponent<"div", any, any, never>;
};
export {};
//# sourceMappingURL=Modal.d.ts.map