import * as validators from './validators';
export declare enum ErrorCodes {
    missingRequiredColumns = "missingRequiredColumns",
    extraColumns = "extraColumns",
    rowsExceedMaxLimit = "rowsExceedMaxLimit",
    customValidationFailed = "customValidationFailed"
}
export interface Props {
    data: string | File;
    columns: Array<Column>;
    header?: boolean;
    maxRows?: number;
    validateRow?: (rowData: Array<any>) => boolean;
    validateFile?: (data: Array<any>) => boolean;
    strict?: boolean;
}
export interface ResultProps<R> {
    result: ResultRow<R>[];
    totalRows: number;
    validRows: number;
    errorRows: number;
    ignoredRows: number;
    isFileValid: boolean;
    isCustomValidationFailed: boolean;
    errors: Array<string>;
}
export interface Column {
    name: string;
    validators: Array<validators.ValidatorFn>;
    required?: boolean;
}
export interface Output {
    [key: string]: any;
}
export declare type RowData<Row extends Output> = {
    [K in keyof Row]: {
        isColumnValid: boolean;
        value: Row[K];
    };
};
export interface ResultRow<Row extends Output> {
    data: RowData<Row>;
    isRowValid: boolean;
}
/**
 * Parses a CSV file or string and returns array of parsed objects
 * @example
 * parseCsv(
 *  {
 *    data: `Column 1,Column 2,Column 3
 *      1,White,1/1/2019`,
 *    columns: [
 *        {
 *          name: 'Column 1',
 *          validationRules: [validators.isInt, validators.isNotEmpty]
 *        },
 *        {
 *          name: 'Column 2',
 *          validationRules: [validators.isString, validators.isNotEmpty]
 *        },
 *        {
 *          name: 'Column 3',
 *          validationRules: [validators.isDate, validators.isNotEmpty]
 *        },
 *      ],
 *    header: true,
 *    maxRows: 2,
 *    strict: true,
 *  }
 * )
 * .then((parseResult => {
 *   // Results are returned as ResultProps object
 * }));
 *
 * @param props Object of type Props containing the conversion details
 * @param props.data Can be a string containing CSV data of a file input value
 * @param props.columns Definition of the columns with their validation rules
 * @param props.header Specifies wether the CSV data has header or not
 * @param props.maxRows Maximum number of rows to parse from the file, any rows beyond that will be ignored
 * @param props.validateRow custom function to perform custom validation on each row
 * @param props.strict Strict mode: if set to true, file will be marked as invalid if the CSV data contain any extra column(s)
 */
export declare const parseCsv: <R extends Output>(props: Props) => Promise<ResultProps<R>>;
//# sourceMappingURL=csvParser.d.ts.map