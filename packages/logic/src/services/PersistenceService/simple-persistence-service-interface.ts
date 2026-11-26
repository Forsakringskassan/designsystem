/**
 * @public
 */
export interface SimplePersistenceServiceInterface<T> {
    set(value: T): void;
    get(): T;
    find(): T | undefined;
    remove(): void;
}
