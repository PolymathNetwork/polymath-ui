/// <reference path="../../../../src/typing/react-table.d.ts" />
import { Api as ReactTableApi, Row as ReactTableRow } from 'react-table';
export interface SelectRowProps extends ReactTableApi {
}
export interface Row extends ReactTableRow {
    isSelected?: boolean;
    getSelectToggleProps?: () => any;
    toggleSelected?: (index: number) => void;
}
export declare const useSelectRow: (props: SelectRowProps) => {
    rows: ReactTableRow[];
    getSelectRowToggleProps: () => {
        onChange: (forcedState: boolean) => any;
        checked: boolean;
    };
    toggleSelectAll: (forcedState: boolean) => any;
    hooks: import("react-table").Hooks;
    columns: import("react-table").EnhancedColumn[];
    getTableProps: () => any;
    getRowProps: () => any;
    prepareRow: (row: ReactTableRow) => any;
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
//# sourceMappingURL=useSelectRow.d.ts.map