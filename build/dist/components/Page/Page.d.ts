import React, { Component } from 'react';
import { PageWrapProps } from '../PageWrap';
export interface PageProps extends PageWrapProps {
    title?: string;
    children: React.ReactNode;
    scrollToTopOnMount?: boolean;
}
export declare class Page extends Component<PageProps> {
    static defaultProps: {
        scrollToTopOnMount: boolean;
    };
    componentWillMount(): void;
    componentDidUpdate(): void;
    update(props: PageProps): void;
    render(): JSX.Element;
}
//# sourceMappingURL=Page.d.ts.map