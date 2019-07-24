import React from 'react';
interface Props {
    /**
     * Provide <Step> components to be rendered in the
     * <ProgressIndicator>
     */
    children?: React.ReactNode;
    /**
     * Specify the current step array index
     */
    currentIndex: number;
    vertical: boolean;
    ordered?: boolean;
}
export declare class ProgressIndicator extends React.Component<Props> {
    static Step: React.FunctionComponent<import("./Step").StepProps>;
    renderSteps: () => (React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null)[];
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ProgressIndicator.d.ts.map