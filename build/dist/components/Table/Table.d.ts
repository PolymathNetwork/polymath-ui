import React, { FC } from 'react';
import { HeaderColumn } from 'react-table';
import 'simplebar/dist/simplebar.css';
interface Props {
    columns: HeaderColumn[];
    data: any[];
    selectable?: boolean;
    csvParserData?: any[];
}
export declare const TableComponent: FC<Props>;
export declare const Table: React.FunctionComponent<Props> & {
    Pagination: React.FunctionComponent<import("./Pagination").Props>;
    BatchActionsToolbar: React.FunctionComponent<import("./BatchActionsToolbar").Props>;
    Rows: React.FunctionComponent<import("./Rows").Props>;
    RowActions: import("styled-components").StyledComponent<"div", import("../..").ThemeInterface, any, never>;
    Toolbar: React.FunctionComponent<import("./Toolbar").Props>;
};
export {};
//# sourceMappingURL=Table.d.ts.map