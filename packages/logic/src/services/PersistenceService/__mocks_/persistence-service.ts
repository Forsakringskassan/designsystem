import { vi } from "vitest";
import { type PersistenceServiceInterface } from "../persistence-service-interface";

export class PersistenceService<T> implements PersistenceServiceInterface<T> {
    public get = vi.fn();
    public find = vi.fn();
    public set = vi.fn();
    public remove = vi.fn();
}
