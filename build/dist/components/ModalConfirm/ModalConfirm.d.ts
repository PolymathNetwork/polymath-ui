import React from 'react';
import { typeHelpers } from "../../misc";
import { Modal } from "../Modal";
declare type ModalProps = typeHelpers.GetProps<typeof Modal>;
export interface Props extends ModalProps {
    isActionDisabled?: boolean;
    actionButtonText?: string;
    cancelButtonText?: string;
    onSubmit: () => void;
    onClose: () => void;
}
export declare const ModalConfirm: React.FunctionComponent<Props> & {
    Header: React.FunctionComponent<import("../Modal/Header").HeaderProps> & {
        defaultProps: Partial<import("../Modal/Header").HeaderProps>;
    };
    Body: import("styled-components").StyledComponent<"div", any, any, never>;
    defaultProps: {
        isActionDisabled: boolean;
        actionButtonText: string;
        cancelButtonText: string;
    };
};
export {};
//# sourceMappingURL=ModalConfirm.d.ts.map