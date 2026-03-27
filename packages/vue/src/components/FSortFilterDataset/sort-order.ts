/**
 * Represents the attributes used when sorting.
 *
 * @public
 */
export interface SortOrder {
    attribute: PropertyKey;
    name: string;
    ascendingName: string;
    ascending: boolean;
    id: number;
}
