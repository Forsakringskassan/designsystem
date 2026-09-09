import { vi } from "vitest";
import { type SimplePersistenceServiceInterface } from "../simple-persistence-service-interface";

export class SimplePersistenceService<
    T,
> implements SimplePersistenceServiceInterface<T> {
    public get = vi.fn<() => T>();
    public find = vi.fn<() => T | undefined>();
    public set = vi.fn<() => void>();
    public remove = vi.fn<() => void>();
}
