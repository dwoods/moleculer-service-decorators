"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("./utils/metadata");
const parameters_1 = require("./utils/parameters");
/**
 * Create the parameter definition for the service action
 * @param {ParamOptions} options
 */
function param(_a) {
    var { name, type } = _a, options = __rest(_a, ["name", "type"]);
    return (target, propertyKey, parameterIndex) => {
        const desc = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        const actionParams = metadata_1.getMetadata(target, `${propertyKey.toString()}Params`) || {};
        let validation;
        let paramName;
        if (name) {
            paramName = name;
        }
        else {
            paramName = parameters_1.getParamNames(desc.value)[parameterIndex];
        }
        if (!paramName) {
            throw new ReferenceError("Parameter name not specified");
        }
        if (type && typeof type === "string") {
            validation = Object.assign({ type }, options);
        }
        else {
            validation = type;
        }
        const params = Object.assign({}, actionParams, { [paramName]: validation });
        metadata_1.setMetadata(target, `${propertyKey.toString()}Params`, params);
    };
}
exports.param = param;
/**
 * Add the action Context to the parameter when the action is executed
 */
function context() {
    return (target, propertyKey, parameterIndex) => {
        const desc = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        let paramName;
        if (name) {
            paramName = name;
        }
        else {
            paramName = parameters_1.getParamNames(desc.value)[parameterIndex];
        }
        if (!paramName) {
            throw new ReferenceError("Parameter name not specified");
        }
        metadata_1.setMetadata(target, `${propertyKey.toString()}Context`, { paramName, index: parameterIndex });
    };
}
exports.context = context;
/**
 * Add the Context Metadata to the parameter when the action is executed
 */
function meta() {
    return (target, propertyKey, parameterIndex) => {
        const desc = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        let paramName;
        if (name) {
            paramName = name;
        }
        else {
            paramName = parameters_1.getParamNames(desc.value)[parameterIndex];
        }
        if (!paramName) {
            throw new ReferenceError("Parameter name not specified");
        }
        metadata_1.setMetadata(target, `${propertyKey.toString()}Meta`, { paramName, index: parameterIndex });
    };
}
exports.meta = meta;
/**
 * Fastest Validator implementation of the `any` type
 * @param {ParamTypeOptions} options The name of the param and whether it is required
 */
function any({ optional, name }) {
    return param({ type: "any", optional, name });
}
exports.any = any;
/**
 * Fastest Validator implementation of the `array` type
 * @param {ArrayParamOptions} options
 */
function array(options) {
    return param(Object.assign({}, options, { type: "array" }));
}
exports.array = array;
/**
 * Fastest Validator implementation of the `boolean` type
 * @param {BooleanParamOptions} options
 */
function boolean(options) {
    return param(Object.assign({}, options, { type: "boolean" }));
}
exports.boolean = boolean;
/**
 * Fastest Validator implementation of the `date` type
 * @param {DateParamOptions} options
 */
function date(options) {
    return param(Object.assign({}, options, { type: "date" }));
}
exports.date = date;
/**
 * Fastest Validator implementation of the `email` type
 * @param {EmailParamOptions} options
 */
function email(options) {
    return param(Object.assign({}, options, { type: "email" }));
}
exports.email = email;
/**
 * Fastest Validator implementation of the `forbidden` type
 * @param {ForbiddenParamOptions} options
 */
function forbidden(options) {
    return param(Object.assign({}, options, { type: "forbidden" }));
}
exports.forbidden = forbidden;
/**
 * Fastest Validator implementation of the `number` type
 * @param {NumberParamOptions} options
 */
function number(options) {
    return param(Object.assign({}, options, { type: "number" }));
}
exports.number = number;
/**
 * Fastest Validator implementation of the `object` type
 * @param {ParamTypeOptions} options
 */
function object(options) {
    return param(Object.assign({}, options, { type: "object" }));
}
exports.object = object;
/**
 * Fastest Validator implementation of the `string` type
 * @param {StringParamOptions} options
 */
function string(options) {
    return param(Object.assign({}, options, { type: "string" }));
}
exports.string = string;
/**
 * Fastest Validator implementation of the `url` type
 * @param {ParamTypeOptions} options
 */
function url(options) {
    return param(Object.assign({}, options, { type: "url" }));
}
exports.url = url;
