import React, { FC } from 'react';
import { EnhancedComponentProps } from "../FormikProxy";
interface Props {
    onChange: (e: string) => void;
    name: string;
    value: string;
}
export declare type TextInputProps = JSX.LibraryManagedAttributes<typeof TextInput, Props>;
export declare const TextInputPrimitive: FC<Props>;
export declare const TextInput: React.FunctionComponent<EnhancedComponentProps<string>> & {
    defaultProps: Partial<Props>;
};
export {};
//# sourceMappingURL=TextInput.d.ts.map