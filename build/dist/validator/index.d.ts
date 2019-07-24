import * as Yup from 'yup';
import { BigNumberSchema } from './schemas/BigNumberSchema';
import { typeHelpers } from "../misc";
declare type ValidatorFn<T> = (message?: string | ((params: object & Partial<Yup.TestMessageParams>) => string) | undefined) => T;
interface CustomSchema {
    isRequired: ValidatorFn<this>;
}
interface CustomStringSchema extends Yup.StringSchema, CustomSchema {
    isEthereumAddress: ValidatorFn<this>;
    isRequired: ValidatorFn<this>;
    required: ValidatorFn<this>;
    isEmail: ValidatorFn<this>;
    isUrl: ValidatorFn<this>;
}
interface CustomStringSchemaConstructor extends Yup.StringSchemaConstructor {
    (): CustomStringSchema;
    new (): CustomStringSchema;
}
interface CustomNumberSchema extends Yup.NumberSchema, CustomSchema {
}
interface CustomNumberSchemaConstructor extends Yup.NumberSchemaConstructor {
    (): CustomNumberSchema;
    new (): CustomNumberSchema;
}
interface CustomDateSchema extends Yup.DateSchema, CustomSchema {
}
interface CustomDateSchemaConstructor extends Yup.DateSchemaConstructor {
    (): CustomDateSchema;
    new (): CustomDateSchema;
}
interface CustomBooleanSchema extends Yup.BooleanSchema, CustomSchema {
}
interface CustomBooleanSchemaConstructor extends Yup.BooleanSchemaConstructor {
    (): CustomBooleanSchema;
    new (): CustomBooleanSchema;
}
interface CustomArraySchema<T> extends Yup.ArraySchema<T>, CustomSchema {
}
interface CustomArraySchemaConstructor extends Yup.ArraySchemaConstructor {
    <T>(schema?: Yup.Schema<T>): CustomArraySchema<T>;
    new (): CustomArraySchema<{}>;
}
interface CustomMixedSchema extends Yup.MixedSchema, CustomSchema {
}
interface CustomMixedSchemaConstructor extends Yup.MixedSchemaConstructor {
    (): CustomMixedSchema;
    new (): CustomMixedSchema;
}
interface CustomBigNumberSchema extends BigNumberSchema, CustomSchema {
}
declare type ExtendedYupType = typeHelpers.Omit<typeof Yup, 'string' | 'mixed' | 'number' | 'date' | 'bool' | 'boolean' | 'array'> & {
    array: CustomArraySchemaConstructor;
    boolean: CustomBooleanSchemaConstructor;
    bool: CustomBooleanSchemaConstructor;
    string: CustomStringSchemaConstructor;
    mixed: CustomMixedSchemaConstructor;
    number: CustomNumberSchemaConstructor;
    date: CustomDateSchemaConstructor;
    bigNumber: () => CustomBigNumberSchema;
};
declare const validator: ExtendedYupType;
export { validator };
//# sourceMappingURL=index.d.ts.map