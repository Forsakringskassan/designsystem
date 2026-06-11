import { vi } from "vitest";
import { type SimplePersistenceServiceInterface } from "../simple-persistence-service-interface";

export class SimplePersistenceService<
    T,
> implements SimplePersistenceServiceInterface<T> {
    public get = vi.fn();
    public find = vi.fn();
    public set = vi.fn();
    public remove = vi.fn();
}
