"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const metadata_1 = require("./utils/metadata");
function queue(options) {
    return (target, propertyKey, descriptor) => {
        const func = descriptor.value;
        if (func && util_1.isFunction(func)) {
            const opts = Object.assign({}, options);
            const queues = metadata_1.getMetadata(target, "queues") || {};
            // const params = getMetadata(target, `${keyName}Params`);
            // const contextParam = getMetadata(target, `${keyName}Context`);
            // const metaParam = getMetadata(target, `${keyName}Meta`);
            const process = descriptor.value;
            // if (params) {
            //     opts.params = params;
            // }
            queues[propertyKey] = Object.assign({ process }, opts);
            metadata_1.setMetadata(target, "queues", queues);
            // removeMetadata(target, `${keyName}Params`);
            return descriptor;
        }
        else {
            throw new TypeError("A queue must be a function/method");
        }
    };
}
exports.queue = queue;
