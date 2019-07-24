/// <reference path="../../../../src/typing/react-table.d.ts" />
import { Api as ReactTableApi, Row as ReactTableRow, Cell as ReactTableCell } from 'react-table';
import { csvParser } from "../../misc";
export interface CsvParserProps extends ReactTableApi {
}
export interface Row extends ReactTableRow {
    isValid?: boolean;
}
export interface Cell extends ReactTableCell {
    isValid?: boolean;
}
export declare const useCsvParser: <Output extends csvParser.Output>(csvParserData: csvParser.ResultRow<Output>[]) => (props: CsvParserProps) => {
    rows: ReactTableRow[];
    hooks: import("react-table").Hooks;
    columns: import("react-table").EnhancedColumn[];
    getTableProps: () => any;
    getRowProps: () => any;
    prepareRow: (row: ReactTableRow) => any;
    getSelectRowToggleProps: () => any;
    toggleSelectAll: (forcedState: boolean) => any;
    data: any[];
    state?: any;
    debug?: boolean | undefined;
    setFilter: () => any;
    setAllFilters: () => any;
    nextPage: () => any;
    previousPage: () => any;
    setPageSize: (size: number) => any;
    gotoPage: (page: number) => any;
    canPreviousPage: boolean;
    canNextPage: boolean;
    page: ReactTableRow[];
    pageOptions: [];
    headerGroups: import("react-table").HeaderGroup[];
    headers: import("react-table").EnhancedColumn[];
};
//# sourceMappingURL=useCsvParser.d.ts.map