import json2csv from 'json2csv';
export declare const delay: (amount: number) => Promise<{}>;
/**
 * Returns a string hash of a POJO for comparison
 *
 * @param args arguments to hash
 */
export declare function hashObj(args: any): string;
export declare const toEtherscanUrl: (value: string, { subdomain, type }?: {
    subdomain?: string | undefined;
    type?: string | undefined;
}) => string;
/**
 * Generates a CSV file from JSON data and triggers a download in the client
 *
 * @param data json2csv data, see https://www.npmjs.com/package/json2csv#javascript-module-examples
 * @param fileName name of the downloaded file
 * @param opts json2csv options, see https://www.npmjs.com/package/json2csv#available-options
 */
export declare const downloadCsvFile: <T>(data: Readonly<T> | ReadonlyArray<T>, fileName: string, opts?: json2csv.Options<T> | undefined) => void;
export declare const isValidAddress: (address: string) => boolean;
//# sourceMappingURL=index.d.ts.map