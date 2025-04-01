import { PersistenceServiceInterface } from "./PersistenceServiceInterface";

/* istanbul ignore next: manually tested */
const haveSessionStorage = /* @__PURE__ */ (() => {
    const test = "fkui.sessionstorage.test";
    try {
        if (window.sessionStorage) {
            window.sessionStorage.setItem(test, "test");
            window.sessionStorage.removeItem(test);
            return true;
        } else {
            return false;
        }
    } catch {
        /* Safari on iOS throws security exceptions when accessing
         * sessionstorage in private browsing. */
        return false;
    }
})();

/**
 * This feature can be used by creating a new file with something like:
 *
 * ```
 * export const MyCustomPersistenceService = new PersistenceService<MyCustomApplicationModel>();
 * ```
 *
 * There is also a simplified version in {@link SimplePersistenceService}.
 *
 * @public
 */
export class PersistenceService<T> implements PersistenceServiceInterface<T> {
    private cache: Map<string, T>;

    public constructor() {
        this.cache = new Map();
    }

    public set(key: string, value: T): void {
        if (this.isSessionPresent) {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        }
        this.cache.set(key, value);
    }

    public get(key: string): T {
        const found = this.find(key);
        if (typeof found !== "undefined") {
            return found;
        }
        throw Error(`PersistenceService cannot find entry with key "${key}"`);
    }

    public find(key: string): T | undefined {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        const persisted = this.isSessionPresent
            ? window.sessionStorage.getItem(key)
            : null;
        if (persisted) {
            const value = JSON.parse(persisted);
            this.cache.set(key, value);
        }
        return this.cache.get(key);
    }

    public remove(key: string): void {
        if (this.isSessionPresent) {
            window.sessionStorage.removeItem(key);
        }
        this.cache.delete(key);
    }

    /**
     * @internal
     */
    /* istanbul ignore next: for mocking in unittests */
    public get isSessionPresent(): boolean {
        return haveSessionStorage;
    }
}
