import * as Yup from 'yup';
import BigNumber from 'bignumber.js';
export declare class BigNumberSchema extends Yup.mixed {
    constructor();
    _typeCheck(value: any): any;
    min(min: number | BigNumber, message: string): this;
    max(max: number | BigNumber, message: string): this;
    minDigits(minDigits: number, message: string): this;
    maxDigits(maxDigits: number, message: string): this;
    lessThan(less: number, message: string): this;
    moreThan(more: number, message: string): this;
    postive(message: string): this;
    negative(message: string): this;
    required(message: string): this;
}
//# sourceMappingURL=BigNumberSchema.d.ts.map