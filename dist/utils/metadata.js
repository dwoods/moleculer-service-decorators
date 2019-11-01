"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract the calls incase the Reflect library changes or a different one is better
 */
require("reflect-metadata");
const constants_1 = require("../constants");
function prefixKey(key) {
    if (typeof key === "string" && key.startsWith(constants_1.META_PREFIX) === false) {
        return `${constants_1.META_PREFIX}${key}`;
    }
    return key;
}
function getMetadataKeys(target) {
    const keys = Reflect.getMetadataKeys(target) || [];
    return keys.filter((key) => key.toString().startsWith(constants_1.META_PREFIX));
}
exports.getMetadataKeys = getMetadataKeys;
function getMetadata(target, key) {
    const prefixedKey = prefixKey(key);
    const data = Reflect.getMetadata(prefixedKey, target);
    return data;
}
exports.getMetadata = getMetadata;
function removeMetadata(target, key) {
    const prefixedKey = prefixKey(key);
    return Reflect.deleteMetadata(prefixedKey, target);
}
exports.removeMetadata = removeMetadata;
function setMetadata(target, key, value) {
    const prefixedKey = prefixKey(key);
    Reflect.defineMetadata(prefixedKey, value, target);
}
exports.setMetadata = setMetadata;
