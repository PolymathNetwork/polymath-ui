import React from 'react';
declare type Props = {
    children: React.ReactNode;
};
declare type State = {
    hasError: boolean;
};
export declare class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidCatch(error: Error, errorInfo: {
        [key: string]: any;
    }): void;
    render(): {} | null | undefined;
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map