/**
 * Interface used to create type-safe events for `EventBus`.
 *
 * Augment this interface in your application:
 *
 * ```ts
 * declare module "@fkui/vue" {
 *     interface EventBusMap {
 *         "my-event": [name: string, age: number];
 *     }
 * }
 * ```
 *
 * @public
 */
/* eslint-disable @typescript-eslint/no-empty-object-type -- augmented by consumers */
export interface EventBusMap {
    /* augmented by API consumers */
}

/**
 * API Interface for EventBus.
 *
 * @public
 */
export interface EventBus {
    /**
     * Emit event. All listeners for this event will notified in the same order
     * they where added. The listeners runs synchronous.
     */
    $emit<K extends keyof EventBusMap>(type: K, ...args: EventBusMap[K]): void;
    $emit(type: string, ...args: unknown[]): void;

    /**
     * Add a new event listener.
     */
    $on<K extends keyof EventBusMap>(
        type: K,
        callback: (...args: EventBusMap[K]) => void,
    ): void;
    $on(type: string, callback: (...args: unknown[]) => void): void;

    /**
     * Remove previously added event listener. Make sure to pass in the same
     * callback as you used when adding the listener.
     */
    $off<K extends keyof EventBusMap>(
        type: K,
        callback: (...args: EventBusMap[K]) => void,
    ): void;
    $off(type: string, callback: (data: unknown) => void): void;
}

function lazyLoad<T>(fn: () => T): () => T {
    let cache: T;
    return () => cache ?? (cache = fn());
}

const eventTarget = lazyLoad(() => new EventTarget());
const fn = new Map();

function $emit(type: string, ...args: unknown[]): void {
    const event = new CustomEvent(type, { detail: args });
    eventTarget().dispatchEvent(event);
}

function $on(type: string, callback: (...data: unknown[]) => void): void {
    fn.set(callback, (event: CustomEvent) => callback(...event.detail));
    eventTarget().addEventListener(type, fn.get(callback));
}

function $off(type: string, callback: (...data: unknown[]) => void): void {
    eventTarget().removeEventListener(type, fn.get(callback));
    fn.delete(callback);
}

/**
 * @public
 */
export const EventBus: EventBus = {
    $emit,
    $on,
    $off,
};
