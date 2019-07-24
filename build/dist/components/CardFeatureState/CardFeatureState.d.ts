import React from 'react';
export interface CardFeatureStateProps {
    status: 'inactive' | 'idle' | 'warning';
    IconAsset: React.ComponentType<React.SVGAttributes<SVGElement>>;
    children: React.ReactNode;
}
export declare const CardFeatureState: {
    ({ status, IconAsset, children, }: CardFeatureStateProps): JSX.Element;
    defaultProps: {
        status: string;
    };
};
//# sourceMappingURL=CardFeatureState.d.ts.map