/**
 * @public
 */
export interface PersistenceServiceInterface<T> {
    set(key: string, value: T): void;
    get(key: string): T;
    find(key: string): T | undefined;
    remove(key: string): void;
}
