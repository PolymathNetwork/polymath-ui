import React, { Component } from 'react';
import { typeHelpers, csvParser } from "../../../misc";
import { Table } from "../../Table";
import { CsvContext } from '../Context';
declare type TableProps = typeHelpers.GetProps<typeof Table>;
export interface Props {
    tableConfig: typeHelpers.Omit<TableProps, 'data' | 'csvParserData'>;
}
export declare class CsvPreviewComponent<Output extends csvParser.Output> extends Component<Props> {
    static contextType: React.Context<CsvContext<{}>>;
    render(): JSX.Element | null;
}
export declare const CsvPreview: import("styled-components").StyledComponent<typeof CsvPreviewComponent, import("../../../styles").ThemeInterface, {}, never>;
export {};
//# sourceMappingURL=index.d.ts.map