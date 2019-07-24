/// <reference types="react" />
import { types } from "../../misc";
export declare const getTransactionQueueTitle: (queue: types.TransactionQueuePojo) => string;
export declare const getTransactionQueueContent: (queue: types.TransactionQueuePojo) => {
    title: string;
    description: string;
} | {
    title: string;
    description?: undefined;
};
export declare const getTransactionTitle: (transaction: types.TransactionPojo, index: number, transactions: types.TransactionPojo[]) => string;
export declare const getTransactionContent: (transaction: types.TransactionPojo, index: number, transactions: types.TransactionPojo[]) => {
    title: string;
    description: string;
};
export declare const getTransactionIcon: (transaction: types.TransactionPojo) => ((props: import("react").SVGProps<SVGSVGElement>) => JSX.Element) | ((props: import("react").SVGProps<SVGSVGElement>) => JSX.Element) | ((props: import("react").SVGProps<SVGSVGElement>) => JSX.Element) | ((props: import("react").SVGProps<SVGSVGElement>) => JSX.Element) | ((props: import("react").SVGProps<SVGSVGElement>) => JSX.Element) | ((props: import("react").SVGProps<SVGSVGElement>) => JSX.Element) | ((props: import("react").SVGProps<SVGSVGElement>) => JSX.Element);
//# sourceMappingURL=contentMappings.d.ts.map