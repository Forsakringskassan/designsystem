import { PersistenceService } from "./PersistenceService";
import { SimplePersistenceServiceInterface } from "./SimplePersistenceServiceInterface";

/**
 * This feature can be used by creating a new file with something like:
 *
 * ```ts
 * export const MyAwesomePersistenceService = new SimplePersistenceService<MyAwesomeModel>("my-awesome-key");
 * ```
 *
 * There is also a more advanced version in {@link PersistenceService}.
 *
 * @public
 */
export class SimplePersistenceService<T>
    implements SimplePersistenceServiceInterface<T>
{
    private persistenceService: PersistenceService<T>;
    private key: string;

    public constructor(key: string) {
        this.key = key;
        this.persistenceService = new PersistenceService<T>();
    }

    public set(value: T): void {
        this.persistenceService.set(this.key, value);
    }

    public get(): T {
        return this.persistenceService.get(this.key);
    }
    public find(): T | undefined {
        return this.persistenceService.find(this.key);
    }

    public remove(): void {
        this.persistenceService.remove(this.key);
    }
}
