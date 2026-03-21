import { type PersistenceServiceInterface } from "../persistence-service-interface";

export class PersistenceService<T> implements PersistenceServiceInterface<T> {
    public get = jest.fn();
    public find = jest.fn();
    public set = jest.fn();
    public remove = jest.fn();
}
