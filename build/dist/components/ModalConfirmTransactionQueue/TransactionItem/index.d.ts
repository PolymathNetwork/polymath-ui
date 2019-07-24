import { FC } from 'react';
import { types } from "../../../misc";
interface TransactionItemProps {
    transaction: types.TransactionPojo;
    getContent: (transaction: types.TransactionPojo, index: number, transactions: types.TransactionPojo[]) => {
        title: string;
        description: string;
    };
    index: number;
    allTransactions: types.TransactionPojo[];
}
interface StaticProps {
    defaultProps: {
        getContent: TransactionItemProps['getContent'];
    };
}
export declare const TransactionItem: FC<TransactionItemProps> & StaticProps;
export {};
//# sourceMappingURL=index.d.ts.map