import React, { FC } from 'react';
import styled from 'styled-components';
import {
  gridGap,
  GridGapProps,
  gridAutoFlow,
  gridTemplateColumns,
  gridTemplateAreas,
  gridAutoColumns,
  gridAutoRows,
  alignItems,
  // @ts-ignore
  justifyItems,
  justifyContent,
  GridAutoFlowProps,
  GridTemplateColumnsProps,
  GridTemplateAreasProps,
  GridAutoColumnsProps,
  GridAutoRowsProps,
  AlignItemsProps,
  JustifyItemsProps,
  JustifyContentProps,
} from 'styled-system';
import { typeHelpers } from '~/misc';
import { Box } from '~/components/Box';
import { Item } from './Item';

export type GridProps = typeHelpers.GetProps<typeof Box> &
  GridGapProps &
  GridAutoFlowProps &
  GridAutoFlowProps &
  GridTemplateColumnsProps &
  GridTemplateAreasProps &
  GridAutoColumnsProps &
  GridAutoRowsProps &
  AlignItemsProps &
  JustifyItemsProps &
  JustifyContentProps;

const GridComponent = styled(Box)<GridProps>`
  display: grid;
  ${gridGap};
  ${gridAutoFlow};
  ${gridTemplateColumns};
  ${gridTemplateAreas};
  ${gridAutoColumns};
  ${gridAutoRows};
  ${alignItems};
  ${justifyContent};
  ${justifyItems};
`;

// TODO @grsmto: remove when https://github.com/pedronauck/docz/issues/337 is resolved
export const GridDocz: FC<GridProps> = props => {
  return <Grid {...props} />;
};

export const Grid = Object.assign(GridComponent, {
  Item,
});

Grid.defaultProps = {
  gridGap: 'gridGap',
};
