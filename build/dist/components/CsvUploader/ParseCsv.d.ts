import { Component, ReactNode } from 'react';
import { csvParser } from "../../misc";
export interface RenderProps<Output extends csvParser.Output> {
    data: csvParser.ResultProps<Output>;
    setFile(file: File): void;
    clearFile(): void;
}
export interface ParseResult<Output extends csvParser.Output> {
    data: csvParser.ResultProps<Output>;
    config: Config;
    errors: string[];
    warnings: string[];
}
export interface Config {
    columns: Array<csvParser.Column>;
    header?: boolean;
    maxRows?: number;
    strict?: boolean;
    validateFile?: (data: Array<any>) => boolean;
    customValidationErrorMessage?: CustomValidationError;
}
export interface CustomValidationError {
    header: string;
    body: string;
}
export interface Props<Output extends csvParser.Output> {
    config: Config;
    render(output: RenderProps<Output>): ReactNode;
}
interface State<Output extends csvParser.Output> {
    data: csvParser.ResultProps<Output>;
}
export declare class ParseCsv<Output extends csvParser.Output> extends Component<Props<Output>, State<Output>> {
    state: {
        data: {
            result: never[];
            totalRows: number;
            validRows: number;
            errorRows: number;
            ignoredRows: number;
            isFileValid: boolean;
            isCustomValidationFailed: boolean;
            errors: never[];
        };
    };
    setFile: (file: string | File) => Promise<void>;
    clearFile: () => void;
    render(): ReactNode;
}
export {};
//# sourceMappingURL=ParseCsv.d.ts.map