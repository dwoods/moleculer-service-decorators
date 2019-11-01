"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const metadata_1 = require("./utils/metadata");
/**
 * Add metod as a service event handler
 * @param {EventOptions} options
 */
function event(options) {
    return (target, propertyKey, descriptor) => {
        const handler = descriptor.value;
        const eventName = (options || {}).name || propertyKey.toString();
        if (util_1.isFunction(handler)) {
            const opts = Object.assign({ name: propertyKey.toString() }, options);
            const events = metadata_1.getMetadata(target, "events") || {};
            events[eventName] = Object.assign({ handler }, opts);
            metadata_1.setMetadata(target, "events", events);
            return descriptor;
        }
        throw new TypeError("An event handler must be a function/method");
    };
}
exports.event = event;
/**
 * Add method as a lifecycle event handler
 * @param name Name of the lifecycle event
 */
function lifeCycleEvent(name) {
    if (!name) {
        throw new ReferenceError("Lifecycle event name required");
    }
    return (target, _propertyKey, descriptor) => {
        const handler = descriptor.value;
        if (util_1.isFunction(handler)) {
            metadata_1.setMetadata(target, name, handler);
            return descriptor;
        }
        throw new TypeError("A lifecycle event handler must be a function/method");
    };
}
exports.lifeCycleEvent = lifeCycleEvent;
/**
 * Service created event
 */
function serviceCreated() {
    return lifeCycleEvent("created");
}
exports.serviceCreated = serviceCreated;
/**
 * Service started event
 */
function serviceStarted() {
    return lifeCycleEvent("started");
}
exports.serviceStarted = serviceStarted;
/**
 * Service stopped event
 */
function serviceStopped() {
    return lifeCycleEvent("stopped");
}
exports.serviceStopped = serviceStopped;
