import React from 'react';
import { csvParser } from "../../misc";
import { Config } from './ParseCsv';
export declare type CsvContext<Output extends csvParser.Output> = {
    isFullyInvalid: boolean;
    errorCount: number;
    data: csvParser.ResultProps<Output>;
    csvConfig: Config;
} | null;
export declare const getContext: <Output extends csvParser.Output>() => React.Context<CsvContext<Output>>;
//# sourceMappingURL=Context.d.ts.map