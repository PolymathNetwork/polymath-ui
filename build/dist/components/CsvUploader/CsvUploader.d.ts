import React, { Component } from 'react';
import { typeHelpers, csvParser } from "../../misc";
import { EnhancedComponentProps } from "../inputs/FormikProxy";
import { ParseCsv } from './ParseCsv';
declare type ParseCsvProps = typeHelpers.GetProps<typeof ParseCsv>;
declare type Value<Output extends csvParser.Output> = Output[] | null;
interface PrimitiveProps<Output extends csvParser.Output> {
    csvConfig: ParseCsvProps['config'];
    onChange: (value: Value<Output>) => void;
    name?: string;
    value?: Value<Output>;
    onBlur?: () => void;
}
declare class CsvUploaderPrimitiveComponent<Output extends csvParser.Output> extends Component<PrimitiveProps<Output>> {
    render(): JSX.Element;
}
export declare const CsvUploaderPrimitive: typeof CsvUploaderPrimitiveComponent & {
    CsvErrors: import("styled-components").StyledComponent<React.FunctionComponent<import("./CsvErrors").Props>, import("../..").ThemeInterface, {}, never>;
    CsvPreview: import("styled-components").StyledComponent<typeof import("./CsvPreview").CsvPreviewComponent, import("../..").ThemeInterface, {}, never>;
};
interface Props<Output extends csvParser.Output> extends EnhancedComponentProps<Value<Output>> {
    csvConfig: ParseCsvProps['config'];
}
declare class CsvUploaderWithFormik<Output extends csvParser.Output> extends Component<Props<Output>> {
    render(): JSX.Element;
}
export declare const CsvUploader: typeof CsvUploaderWithFormik & {
    CsvErrors: import("styled-components").StyledComponent<React.FunctionComponent<import("./CsvErrors").Props>, import("../..").ThemeInterface, {}, never>;
    CsvPreview: import("styled-components").StyledComponent<typeof import("./CsvPreview").CsvPreviewComponent, import("../..").ThemeInterface, {}, never>;
};
export {};
//# sourceMappingURL=CsvUploader.d.ts.map