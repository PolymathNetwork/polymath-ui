/// <reference types="react" />
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type ArgumentsType<T> = T extends (...args: infer A) => any ? A : never;
export declare type SecondArgumentType<T> = T extends (arg1: any, arg2: infer A) => any ? A : never;
export declare type FilterPropNamesByType<T, U> = {
    [K in keyof T]: T[K] extends U ? never : K;
}[keyof T];
export declare type OmitFromProcedureArgs<Procedure extends (...args: any[]) => any, T> = Omit<ArgumentsType<Procedure>[0], keyof T>;
export declare type GetProps<C> = C extends React.ComponentType<infer P> ? P : never;
export declare type GetSelectorReturnType<Selector extends (...args: any[]) => (...args: any[]) => any> = ReturnType<ReturnType<Selector>>;
//# sourceMappingURL=helpers.d.ts.map