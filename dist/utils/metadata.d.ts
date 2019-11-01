/**
 * Abstract the calls incase the Reflect library changes or a different one is better
 */
import "reflect-metadata";
export declare function getMetadataKeys(target: any): any[];
export declare function getMetadata(target: any, key: string): any;
export declare function removeMetadata(target: any, key: string): boolean;
export declare function setMetadata(target: any, key: string, value: any): void;
