import { isFunction } from "util";

import {
    getMetadata,
    setMetadata,
} from "./utils/metadata";

export interface QueueTaskOptions {
    concurrency?: number;
    name?: string;
}

export function queue(options?: QueueTaskOptions): MethodDecorator {
    return <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => {
        const func: any = descriptor.value;
        if (func && isFunction(func)) {
            const opts: QueueTaskOptions = { ...options };
            const queues = getMetadata(target, "queues") || {};
            // const params = getMetadata(target, `${keyName}Params`);
            // const contextParam = getMetadata(target, `${keyName}Context`);
            // const metaParam = getMetadata(target, `${keyName}Meta`);
            // const process = descriptor.value;

            // if (params) {
            //     opts.params = params;
            // }

            queues[propertyKey] = descriptor.value;
            // {
            //     process: descriptor.value,
            //     ...opts,
            // };
            setMetadata(target, "queues", queues);
            // removeMetadata(target, `${keyName}Params`);

            return descriptor;
        } else {
            throw new TypeError("A queue must be a function/method");
        }
    };
}
