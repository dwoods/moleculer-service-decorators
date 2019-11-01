"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DecoratorError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = "DecoratorError";
    }
}
exports.DecoratorError = DecoratorError;
