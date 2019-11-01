export interface ParamTypeOptions {
    name?: string;
    optional?: boolean;
}
export interface ParamOptions extends ParamTypeOptions {
    type?: any;
    [key: string]: any;
}
/**
 * Create the parameter definition for the service action
 * @param {ParamOptions} options
 */
export declare function param({ name, type, ...options }: ParamOptions): ParameterDecorator;
/**
 * Add the action Context to the parameter when the action is executed
 */
export declare function context(): ParameterDecorator;
/**
 * Add the Context Metadata to the parameter when the action is executed
 */
export declare function meta(): ParameterDecorator;
/**
 * Fastest Validator implementation of the `any` type
 * @param {ParamTypeOptions} options The name of the param and whether it is required
 */
export declare function any({ optional, name }: ParamTypeOptions): ParameterDecorator;
/**
 * Options for the Array parameter type
 */
export interface ArrayParamOptions extends ParamTypeOptions {
    contains?: any;
    empty?: boolean;
    enum?: any[];
    length?: number;
    min?: number;
    max?: number;
    items?: ParamOptions | ParamOptions[];
}
/**
 * Fastest Validator implementation of the `array` type
 * @param {ArrayParamOptions} options
 */
export declare function array(options?: ArrayParamOptions): ParameterDecorator;
/**
 * Options for the Boolean parameter type
 */
export interface BooleanParamOptions extends ParamTypeOptions {
    convert?: boolean;
}
/**
 * Fastest Validator implementation of the `boolean` type
 * @param {BooleanParamOptions} options
 */
export declare function boolean(options?: BooleanParamOptions): ParameterDecorator;
/**
 * Options for the Date parameter type
 */
export interface DateParamOptions extends ParamTypeOptions {
    convert?: boolean;
}
/**
 * Fastest Validator implementation of the `date` type
 * @param {DateParamOptions} options
 */
export declare function date(options?: DateParamOptions): ParameterDecorator;
/**
 * Options for the Email parameter type
 */
export interface EmailParamOptions extends ParamTypeOptions {
    mode?: "quick" | "precise";
}
/**
 * Fastest Validator implementation of the `email` type
 * @param {EmailParamOptions} options
 */
export declare function email(options?: EmailParamOptions): ParameterDecorator;
/**
 * Options for the Forbidden parameter type
 */
export interface ForbiddenParamOptions {
    name?: string;
}
/**
 * Fastest Validator implementation of the `forbidden` type
 * @param {ForbiddenParamOptions} options
 */
export declare function forbidden(options?: ForbiddenParamOptions): ParameterDecorator;
/**
 * Options for the Number parameter type
 */
export interface NumberParamOptions extends ParamTypeOptions {
    min?: number;
    max?: number;
    equal?: number;
    notEqual?: number;
    integer?: boolean;
    positive?: boolean;
    negative?: boolean;
    convert?: boolean;
}
/**
 * Fastest Validator implementation of the `number` type
 * @param {NumberParamOptions} options
 */
export declare function number(options?: NumberParamOptions): ParameterDecorator;
/**
 * Fastest Validator implementation of the `object` type
 * @param {ParamTypeOptions} options
 */
export declare function object(options?: ParamTypeOptions): ParameterDecorator;
/**
 * Options for the String parameter type
 */
export interface StringParamOptions extends ParamTypeOptions {
    contains?: string;
    enum?: number[];
    empty?: boolean;
    length?: number;
    pattern?: string | RegExp;
    min?: number;
    max?: number;
}
/**
 * Fastest Validator implementation of the `string` type
 * @param {StringParamOptions} options
 */
export declare function string(options?: StringParamOptions): ParameterDecorator;
/**
 * Fastest Validator implementation of the `url` type
 * @param {ParamTypeOptions} options
 */
export declare function url(options?: ParamTypeOptions): ParameterDecorator;
