import React, { FC } from 'react';
import BigNumber from 'bignumber.js';
export interface HeaderProps {
    network: string;
    walletAddress?: string;
    balance?: BigNumber;
    variant: 'default' | 'transparent';
    symbol?: string;
    logo?: string;
    RouterLink: React.ComponentType<any>;
}
export declare const Header: FC<HeaderProps> & {
    defaultProps: {
        variant: 'default';
    };
};
//# sourceMappingURL=Header.d.ts.map