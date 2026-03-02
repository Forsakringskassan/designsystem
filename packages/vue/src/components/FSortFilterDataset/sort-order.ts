/**
 * Represents the attributes used when sorting.
 *
 * @public
 */
export interface SortOrder<TKeys = PropertyKey> {
    attribute: TKeys;
    name: string;
    ascendingName: string;
    ascending: boolean;
    id: number;
}
