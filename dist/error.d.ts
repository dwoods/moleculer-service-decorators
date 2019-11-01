export declare class DecoratorError extends Error {
    cause?: Error | undefined;
    constructor(message: string, cause?: Error | undefined);
}
