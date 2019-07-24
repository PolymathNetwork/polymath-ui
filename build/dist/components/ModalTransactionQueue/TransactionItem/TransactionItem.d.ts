import { FC } from 'react';
import { types } from "../../../misc";
interface TransactionItemProps {
    transaction: types.TransactionPojo;
    transactionLinkSubdomain?: string;
    getTitle: (transaction: types.TransactionPojo, index: number, transactions: types.TransactionPojo[]) => string;
    index: number;
    allTransactions: types.TransactionPojo[];
}
interface StaticProps {
    defaultProps: {
        getTitle: TransactionItemProps['getTitle'];
    };
}
declare const TransactionItem: FC<TransactionItemProps> & StaticProps;
export { TransactionItem };
//# sourceMappingURL=TransactionItem.d.ts.map