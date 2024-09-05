import { SimplePersistenceServiceInterface } from "../SimplePersistenceServiceInterface";

export class SimplePersistenceService<T>
    implements SimplePersistenceServiceInterface<T>
{
    public get = jest.fn();
    public find = jest.fn();
    public set = jest.fn();
    public remove = jest.fn();
}
