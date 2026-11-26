import { vi } from "vitest";
import { type PersistenceServiceInterface } from "../persistence-service-interface";

export class PersistenceService<T> implements PersistenceServiceInterface<T> {
    public get = vi.fn<() => T>();
    public find = vi.fn<() => T | undefined>();
    public set = vi.fn<() => void>();
    public remove = vi.fn<() => void>();
}
