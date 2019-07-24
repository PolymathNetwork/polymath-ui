import { Component } from 'react';
import { types, typeHelpers } from "../../misc";
import { Modal } from "../Modal";
declare type ModalProps = typeHelpers.Omit<typeHelpers.GetProps<typeof Modal>, 'status'>;
export interface ModalTransactionQueueProps extends ModalProps {
    transactionQueue: types.TransactionQueuePojo;
    onContinue: () => void;
    withEmail?: boolean;
    continueButtonText?: string;
    getTitle: (queue: types.TransactionQueuePojo) => string;
    getTransactionTitle?: (transaction: types.TransactionPojo) => string;
    transactionLinkSubdomain?: string;
}
export declare class ModalTransactionQueue extends Component<ModalTransactionQueueProps> {
    static defaultProps: {
        continueButtonText: string;
        getTitle: (queue: types.TransactionQueuePojo) => string;
    };
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ModalTransactionQueue.d.ts.map