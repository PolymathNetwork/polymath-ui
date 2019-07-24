import React from 'react';
interface Props {
    name: string;
}
export declare const FormItem: React.FunctionComponent<Props> & {
    Error: React.FunctionComponent<import("./InputError").Props>;
    Label: React.FunctionComponent<{}>;
    Input: React.FunctionComponent<import("./Input").Props> & {
        defaultProps: {
            FormikComponent: React.ComponentType<any>;
        };
    };
};
export {};
//# sourceMappingURL=FormItem.d.ts.map