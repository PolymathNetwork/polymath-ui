import React from 'react';
import { types } from "../../../misc";
interface State {
    transactionQueue: types.TransactionQueuePojo | null;
    isConfirmed: boolean;
}
interface Props {
    status: 'success' | 'failed';
}
export declare class Demo extends React.Component<Props, State> {
    state: State;
    componentDidUpdate(_prevProps: any, prevState: State): void;
    handleStart: () => void;
    handleConfirm: () => void;
    handleCancel: () => void;
    handleContinue: () => void;
    render(): JSX.Element;
}
export declare const DemoModal: () => null;
export {};
//# sourceMappingURL=Demo.d.ts.map