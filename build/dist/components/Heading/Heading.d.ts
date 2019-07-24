import { FC } from 'react';
import { ColorProps, FontWeightProps, LineHeightProps, FontSizeProps } from 'styled-system';
export declare type HeadingProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4';
} & ColorProps & FontWeightProps & FontSizeProps & LineHeightProps;
export declare const HeadingDocz: FC<HeadingProps>;
export declare const Heading: string & import("styled-components").StyledComponentBase<"div", any, any, never> & {
    defaultProps: {
        as: string;
        variant: string;
        lineHeight: string;
        mt: number;
        mb: string;
    };
};
//# sourceMappingURL=Heading.d.ts.map