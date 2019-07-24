import { TooltipProps } from "../Tooltip";
import { ReactNode } from 'react';
export declare const Icon: import("styled-components").StyledComponent<import("react").FunctionComponent<import("../IconButton").IconButtonProps>, import("../../styles").ThemeInterface, {}, never>;
/**
 * NOTE @monitz87: this is needed because styled components ignores the children
 * prop for some reason
 */
interface Props extends TooltipProps {
    children?: ReactNode;
}
export declare const Tooltip: import("styled-components").StyledComponent<typeof import("../Tooltip").TooltipComponent, import("../../styles").ThemeInterface, TooltipProps & Props, never>;
export {};
//# sourceMappingURL=styles.d.ts.map