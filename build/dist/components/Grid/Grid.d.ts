import { FC } from 'react';
import { GridGapProps, GridAutoFlowProps, GridTemplateColumnsProps, GridTemplateAreasProps, GridAutoColumnsProps, GridAutoRowsProps, AlignItemsProps, JustifyItemsProps, JustifyContentProps } from 'styled-system';
import { typeHelpers } from "../../misc";
import { Box } from "../Box";
export declare type GridProps = typeHelpers.GetProps<typeof Box> & GridGapProps & GridAutoFlowProps & GridAutoFlowProps & GridTemplateColumnsProps & GridTemplateAreasProps & GridAutoColumnsProps & GridAutoRowsProps & AlignItemsProps & JustifyItemsProps & JustifyContentProps;
export declare const GridDocz: FC<GridProps>;
export declare const Grid: string & import("styled-components").StyledComponentBase<"div", any, any, never> & {
    Item: import("styled-components").StyledComponent<"div", any, any, never>;
};
//# sourceMappingURL=Grid.d.ts.map