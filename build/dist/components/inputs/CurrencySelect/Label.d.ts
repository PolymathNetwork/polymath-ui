/// <reference types="styled-components" />
import React from 'react';
import { types } from "../../../misc";
import { ThemeInterface } from "../../../styles";
interface Props {
    Asset: React.ComponentType | string;
    text: string;
    theme: ThemeInterface;
    token: types.Tokens;
}
export declare const Label: React.ForwardRefExoticComponent<Pick<Props & {
    children?: React.ReactNode;
}, "text" | "children" | "Asset" | "token"> & {
    theme?: ThemeInterface | undefined;
}>;
export {};
//# sourceMappingURL=Label.d.ts.map