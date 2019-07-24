import BigNumber from 'bignumber.js';
import { DateTime } from 'luxon';
/**
 * Converts a number to a string formatted representing dollars
 *
 * @param value number to convert
 * @param options.decimals amount of decimals to display
 */
export declare const toUSD: (value: number | BigNumber, { decimals }?: {
    decimals?: number | undefined;
}) => string;
/**
 * Converts a number into a percentage
 *
 * @param value number to convert
 * @param options.decimals amount of decimals to display
 */
export declare const toPercent: (value: number | BigNumber, { decimals }?: {
    decimals?: number | undefined;
}) => string;
/**
 * Converts a number into a string representing an amount of tokens
 *
 * @param value number to convert
 * @param options.decimals amount of decimals to display
 */
export declare const toTokens: (value: number | BigNumber, { decimals }?: {
    decimals?: number | undefined;
}) => string;
/**
 * Shortens an address for display purposes
 */
export declare const toShortAddress: (address: string, { size }?: {
    size?: number | undefined;
}) => string;
export declare const date: typeof DateTime;
export declare const toDateFormat: (inputDate: Date, { format }?: {
    format?: Intl.DateTimeFormatOptions | undefined;
}) => string;
export declare const toTimeFormat: (inputDate: Date, { format }?: {
    format?: Intl.DateTimeFormatOptions | undefined;
}) => string;
//# sourceMappingURL=index.d.ts.map