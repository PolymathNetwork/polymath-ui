import React from 'react';
import { types } from "../../../misc";
export declare const mockTransactionQueue: {
    uid: string;
    name: string;
    status: types.TransactionQueueStatus;
    procedureType: types.ProcedureTypes;
    transactions: {
        uid: string;
        status: types.TransactionStatus;
        transactionQueueUid: string;
        tag: types.PolyTransactionTags;
        args: {};
    }[];
    args: {};
};
interface DemoState {
    isModalOpen: boolean;
    transactionQueue: types.TransactionQueuePojo | null;
}
export declare class Demo extends React.Component<{}, DemoState> {
    state: {
        isModalOpen: boolean;
        transactionQueue: {
            uid: string;
            name: string;
            status: types.TransactionQueueStatus;
            procedureType: types.ProcedureTypes;
            transactions: {
                uid: string;
                status: types.TransactionStatus;
                transactionQueueUid: string;
                tag: types.PolyTransactionTags;
                args: {};
            }[];
            args: {};
        };
    };
    componentDidUpdate(_prevProps: any, prevState: DemoState): void;
    handleClick: () => void;
    handleModalClose: () => void;
    handleContinue: () => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Demo.d.ts.map