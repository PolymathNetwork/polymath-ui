import { typeHelpers } from "../../misc";
import { Tooltip } from "../Tooltip";
import { ReactNode } from 'react';
declare type TooltipProps = typeHelpers.GetProps<typeof Tooltip>;
/**
 * NOTE @monitz87: this is needed because styled components ignores the children
 * prop for some reason
 */
interface Props extends TooltipProps {
    children?: ReactNode;
}
export declare const TooltipPrimary: import("styled-components").StyledComponent<typeof import("../Tooltip").TooltipComponent, import("../../styles").ThemeInterface, import("../Tooltip").TooltipProps & Props, never>;
export {};
//# sourceMappingURL=TooltipPrimary.d.ts.map