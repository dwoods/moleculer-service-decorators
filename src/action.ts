import { ActionSchema } from "moleculer";
import { isFunction } from "util";

import {
    getMetadata,
    setMetadata,
} from "./utils/metadata";

export function action(options?: ActionSchema): MethodDecorator {
    return <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => {
        const func: any = descriptor.value;
        if (func && isFunction(func)) {
            const opts: ActionSchema = { ...options };
            const actions = getMetadata(target, "actions") || {};
            // const params = getMetadata(target, `${keyName}Params`);
            // const contextParam = getMetadata(target, `${keyName}Context`);
            // const metaParam = getMetadata(target, `${keyName}Meta`);
            const handler = descriptor.value;

            // if (params) {
            //     opts.params = params;
            // }

            actions[propertyKey] = {
                handler,
                ...opts,
            };
            setMetadata(target, "actions", actions);
            // removeMetadata(target, `${keyName}Params`);

            return descriptor;
        } else {
            throw new TypeError("An action must be a function/method");
        }
    };
}
