import { FC } from 'react';
export interface StepProps {
    /**
     * Specify whether the step is the current step
     */
    isCurrent?: boolean;
    /**
     * Specify whether the step has been completed
     */
    isComplete?: boolean;
    /**
     * Provide the label for the <ProgressStep>
     */
    label?: string;
    isVertical?: boolean;
    isOrdered?: boolean;
    index?: number;
}
export declare const Step: FC<StepProps>;
//# sourceMappingURL=index.d.ts.map