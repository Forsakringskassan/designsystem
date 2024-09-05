import { PersistenceServiceInterface } from "../PersistenceServiceInterface";

export class PersistenceService<T> implements PersistenceServiceInterface<T> {
    public get = jest.fn();
    public find = jest.fn();
    public set = jest.fn();
    public remove = jest.fn();
}
