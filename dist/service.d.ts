import { Service, ServiceSchema } from "moleculer";
/**
 * Type guard to ensure a constructor is an extended Moleculer Service
 * @param constructor The constructor to check
 */
export declare function isServiceClass(constructor: any): constructor is ServiceConstructor;
/**
 * Get all the metadata from the class and add it to a schema ouput
 * @param constructor The class constructor on which to find the metadata
 */
export declare function getClassMetadata(constructor: ServiceConstructor): Partial<ServiceSchema>;
/**
 * These options should be set in the class itself instead of the options
 */
export declare type ServiceOptionsToExclude = "actions" | "events" | "methods" | "created" | "started" | "stopped";
export declare type ServiceOptions = Partial<Pick<ServiceSchema, Exclude<keyof ServiceSchema, ServiceOptionsToExclude>>>;
export interface ServiceConstructor {
    new (...args: any[]): Service;
}
export declare type ServiceDecorator = <T extends ServiceConstructor>(constructor: T) => T;
/**
 * Add all handlers to the schema for the service
 * @param options
 */
export declare function service(options?: ServiceOptions): ServiceDecorator;
