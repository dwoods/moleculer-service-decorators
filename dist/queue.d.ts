export interface QueueTaskOptions {
    concurrency?: number;
    name?: string;
}
export declare function queue(options?: QueueTaskOptions): MethodDecorator;
