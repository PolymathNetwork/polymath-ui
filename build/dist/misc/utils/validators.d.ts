export declare type ValidatorFn = (value: any) => boolean;
export declare const isNotEmpty: (value: any) => boolean;
export declare const isString: (value: any) => value is string;
export declare const isInt: (value: any) => value is number;
export declare const isNumber: (value: any) => value is number;
interface NumericalityOpts {
    gt?: number;
    gte?: number;
    lt?: number;
    lte?: number;
}
export declare const numericality: ({ gt, gte, lt, lte }: NumericalityOpts) => (value: number) => boolean;
export declare const isEthereumAddress: (value: any) => boolean;
export declare const isDate: (value: any) => boolean;
export {};
//# sourceMappingURL=validators.d.ts.map