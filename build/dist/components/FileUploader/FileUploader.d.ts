import React from 'react';
import { DropzoneProps } from 'react-dropzone';
import { typeHelpers } from "../../misc";
import { EnhancedComponentProps } from "../inputs/FormikProxy";
declare type Value = File | File[] | null;
interface Props extends typeHelpers.Omit<DropzoneProps, 'children'> {
    onChange: (value: Value) => void;
    multiple?: boolean;
    uploadTo?: string;
    onTouch?: () => void;
    onError?: () => void;
    className?: string;
    style?: any;
}
interface State {
    files: File[];
    progress: number;
    isFocused: boolean;
}
declare class FileUploaderComponent extends React.Component<Props, State> {
    static defaultProps: {
        multiple: boolean;
        onTouch: () => void;
        onError: () => void;
    };
    state: State;
    inputRef: React.RefObject<HTMLInputElement>;
    onDrop: (acceptedFiles: File[]) => void;
    handleRemoveFile: () => void;
    handleCancelUpload: () => void;
    handleInputFocus: () => void;
    handleInputBlur: () => void;
    reset(): void;
    renderInput(): JSX.Element;
    render(): JSX.Element;
}
export declare const FileUploaderPrimitive: import("styled-components").StyledComponent<typeof FileUploaderComponent, import("../../styles").ThemeInterface, {}, never>;
export declare const FileUploader: import("styled-components").StyledComponent<React.FunctionComponent<EnhancedComponentProps<Value>>, import("../../styles").ThemeInterface, {}, never>;
export {};
//# sourceMappingURL=FileUploader.d.ts.map