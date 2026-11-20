/**
 * Callback used to commit a new item to the dataset.
 *
 * @public
 * @param item - The item to add.
 * @param alert - Optional text to announce to screen readers. If not provided, a default message is used.
 */
export type FCrudDatasetCommitAdd<T> = (item: T, alert?: string) => void;

/**
 * Callback used to commit a modified item to the dataset.
 *
 * If `item` is given its properties are copied to the original item, otherwise
 * the original item is assumed to already have been modified in place.
 *
 * @public
 * @param item - The modified item.
 * @param alert - Optional text to announce to screen readers. If not provided, a default message is used.
 */
export type FCrudDatasetCommitEdit<T> = (item?: T, alert?: string) => void;

/**
 * Callback used to commit the removal of an item from the dataset.
 *
 * @public
 * @param alert - Optional text to announce to screen readers. If not provided, a default message is used.
 */
export type FCrudDatasetCommitRemove = (alert?: string) => void;

/**
 * Called when the user wants to add a new item.
 *
 * @public
 * @param commit - Call with the new item to add it to the dataset.
 */
export type FCrudDatasetAddCallback<T> = (
    commit: FCrudDatasetCommitAdd<T>,
) => void;

/**
 * Called when the user wants to modify an item.
 *
 * @public
 * @param item - The item to modify.
 * @param commit - Call when the item should be updated in the dataset.
 */
export type FCrudDatasetEditCallback<T> = (
    item: T,
    commit: FCrudDatasetCommitEdit<T>,
) => void;

/**
 * Called when the user wants to remove an item.
 *
 * @public
 * @param item - The item to remove.
 * @param commit - Call when the item should be removed from the dataset.
 */
export type FCrudDatasetRemoveCallback<T> = (
    item: T,
    commit: FCrudDatasetCommitRemove,
) => void;
