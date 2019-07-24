import React from 'react';
import { ModalStatus } from '../types';
export interface HeaderProps {
    label?: string;
    status: ModalStatus;
    children: React.ReactNode;
}
export declare const Header: React.FunctionComponent<HeaderProps> & {
    defaultProps: Partial<HeaderProps>;
};
//# sourceMappingURL=index.d.ts.map