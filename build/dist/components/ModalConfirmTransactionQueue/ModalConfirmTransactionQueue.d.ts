import { FC } from 'react';
import { types, typeHelpers } from "../../misc";
import { ModalConfirm } from "../ModalConfirm";
declare type ModalConfirmProps = typeHelpers.GetProps<typeof ModalConfirm>;
interface Props extends ModalConfirmProps {
    transactionQueue: types.TransactionQueuePojo;
    getContent: (queue: types.TransactionQueuePojo) => {
        title: string;
        description?: string;
    };
}
declare const ModalConfirmTransactionQueue: FC<Props> & {
    defaultProps: {
        getContent: Props['getContent'];
    };
};
export { ModalConfirmTransactionQueue };
//# sourceMappingURL=ModalConfirmTransactionQueue.d.ts.map