/// <reference types="react" />
import { ThemeInterface } from "../../styles";
import { ModalStatus } from './types';
export interface StyleProps {
    isCentered?: boolean;
    maxWidth?: number;
}
export declare const modalStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<StyleProps, ThemeInterface>>;
export declare const Inner: import("styled-components").StyledComponent<"div", ThemeInterface, StyleProps, never>;
export declare const CloseButton: import("styled-components").StyledComponent<import("react").FunctionComponent<import("../IconButton").IconButtonProps>, ThemeInterface, {}, never>;
export declare const StatusBar: import("styled-components").StyledComponent<"div", ThemeInterface, {
    status: ModalStatus;
    theme: ThemeInterface;
}, never>;
//# sourceMappingURL=styles.d.ts.map