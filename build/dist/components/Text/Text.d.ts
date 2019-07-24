import { FC } from 'react';
import { typeHelpers } from "../../misc";
import { ColorProps, FontFamilyProps, FontWeightProps, LineHeightProps, FontSizeProps } from 'styled-system';
import { Box } from "../Box";
declare type BoxProps = typeHelpers.GetProps<typeof Box>;
declare type Props = {
    bold?: boolean;
} & BoxProps & ColorProps & FontFamilyProps & FontWeightProps & FontSizeProps & LineHeightProps;
export declare const Text: import("styled-components").StyledComponent<"div", any, any, never>;
export declare const TextDocz: FC<Props>;
export {};
//# sourceMappingURL=Text.d.ts.map