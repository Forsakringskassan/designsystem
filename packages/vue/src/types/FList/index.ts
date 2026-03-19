/**
 * @public
 */
export type UnknownItem = Record<string, unknown>;

/**
 * Represents a single item in a list-based component (FList, FTable, etc).
 *
 * @public
 */
export type ListItem<T extends object = UnknownItem> = T;

/**
 * Represents an array of items in a list-based component (FList, FTable, etc).
 *
 * @public
 */
export type ListArray<T extends object = UnknownItem> = Array<ListItem<T>>;
