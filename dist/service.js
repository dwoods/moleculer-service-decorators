"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
const constants_1 = require("./constants");
const error_1 = require("./error");
const metadata_1 = require("./utils/metadata");
/**
 * Type guard to ensure a constructor is an extended Moleculer Service
 * @param constructor The constructor to check
 */
function isServiceClass(constructor) {
    return typeof constructor === "function" && moleculer_1.Service.isPrototypeOf(constructor);
}
exports.isServiceClass = isServiceClass;
/**
 * Get all the metadata from the class and add it to a schema ouput
 * @param constructor The class constructor on which to find the metadata
 */
function getClassMetadata(constructor) {
    const keys = metadata_1.getMetadataKeys(constructor);
    const schemaKeys = {};
    keys.forEach((key) => {
        if (typeof key === "string" && key.startsWith(constants_1.META_PREFIX)) {
            const desc = metadata_1.getMetadata(constructor, key);
            schemaKeys[key.replace(new RegExp(`^${constants_1.META_PREFIX}`), "")] = desc;
            metadata_1.removeMetadata(constructor, key);
        }
    });
    return schemaKeys;
}
exports.getClassMetadata = getClassMetadata;
/**
 * Add all handlers to the schema for the service
 * @param options
 */
function service(options = {}) {
    return (constructor) => {
        if (isServiceClass(constructor)) {
            // TODO: Filter options to remove actions, events, etc..
            let schema = Object.assign({}, options, { name: options.name || constructor.name });
            try {
                const keys = getClassMetadata(constructor.prototype);
                schema = Object.assign({}, schema, keys);
            }
            catch (ex) {
                throw new error_1.DecoratorError("An error occured creating the service schema", ex);
            }
            return class extends constructor {
                constructor(...args) {
                    super(...args);
                    this.parseServiceSchema(schema);
                }
            };
        }
        throw TypeError("Class must extend Service");
    };
}
exports.service = service;
