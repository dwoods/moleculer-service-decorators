import { ServiceEvent } from "moleculer";
/**
 * Options for the event, based off ServiceEvent
 */
export declare type EventOptions = Partial<Pick<ServiceEvent, Exclude<keyof ServiceEvent, "handler">>>;
/**
 * Add metod as a service event handler
 * @param {EventOptions} options
 */
export declare function event(options?: EventOptions): MethodDecorator;
/**
 * Available lifecycle events
 */
export declare type LifeCycleEventNames = "created" | "started" | "stopped";
/**
 * Add method as a lifecycle event handler
 * @param name Name of the lifecycle event
 */
export declare function lifeCycleEvent(name: LifeCycleEventNames): MethodDecorator;
/**
 * Service created event
 */
export declare function serviceCreated(): MethodDecorator;
/**
 * Service started event
 */
export declare function serviceStarted(): MethodDecorator;
/**
 * Service stopped event
 */
export declare function serviceStopped(): MethodDecorator;
