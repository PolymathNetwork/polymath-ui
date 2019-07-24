import React from 'react';
import { Modal } from '../';
import { typeHelpers } from "../../../misc";
declare type ModalProps = typeHelpers.GetProps<typeof Modal>;
interface State {
    isModalOpen: boolean;
}
export declare class Demo extends React.Component<ModalProps, State> {
    constructor(props: ModalProps);
    handleClick: () => void;
    handleModalClose: () => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Demo.d.ts.map