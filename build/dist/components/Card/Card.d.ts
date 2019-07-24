/// <reference types="react" />
import { BoxShadowProps } from 'styled-system';
import { BoxProps } from "../Box";
export interface CardProps extends BoxProps {
    boxShadow: BoxShadowProps;
    rounded: boolean;
}
export declare const StyledCard: import("styled-components").StyledComponent<"div", any, any, never>;
export declare const Card: string & import("styled-components").StyledComponentBase<"div", any, any, never> & {
    defaultProps: {
        rounded: boolean;
        boxShadow: number;
        p: string;
    };
};
export declare const CardDocz: (props: CardProps) => JSX.Element;
//# sourceMappingURL=Card.d.ts.map