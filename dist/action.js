"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const metadata_1 = require("./utils/metadata");
function action(options) {
    return (target, propertyKey, descriptor) => {
        const func = descriptor.value;
        if (func && util_1.isFunction(func)) {
            const opts = Object.assign({}, options);
            const actions = metadata_1.getMetadata(target, "actions") || {};
            // const params = getMetadata(target, `${keyName}Params`);
            // const contextParam = getMetadata(target, `${keyName}Context`);
            // const metaParam = getMetadata(target, `${keyName}Meta`);
            const handler = descriptor.value;
            // if (params) {
            //     opts.params = params;
            // }
            actions[propertyKey] = Object.assign({ handler }, opts);
            metadata_1.setMetadata(target, "actions", actions);
            // removeMetadata(target, `${keyName}Params`);
            return descriptor;
        }
        else {
            throw new TypeError("An action must be a function/method");
        }
    };
}
exports.action = action;
