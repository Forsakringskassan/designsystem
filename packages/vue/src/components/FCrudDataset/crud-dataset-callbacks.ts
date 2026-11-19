/**
 * Callback used to commit a new item to the dataset.
 *
 * @public
 * @param item - The item to add.
 * @param alert - Optional text to announce to screen readers. If not provided, a default message is used.
 */
export type FCrudDatasetCommitCreate<T> = (
    this: void,
    item: T,
    alert?: string,
) => void;

/**
 * Callback used to commit a modified item to the dataset.
 *
 * The properties of `item` are copied to the original item in the dataset.
 * Only object items can be modified, calling it for a primitive item (string,
 * number, etc) throws an error.
 *
 * @public
 * @param item - The modified item.
 * @param alert - Optional text to announce to screen readers. If not provided, a default message is used.
 */
export type FCrudDatasetCommitUpdate<T> = (
    this: void,
    item: T,
    alert?: string,
) => void;

/**
 * Callback used to commit the removal of an item from the dataset.
 *
 * @public
 * @param alert - Optional text to announce to screen readers. If not provided, a default message is used.
 */
export type FCrudDatasetCommitDelete = (this: void, alert?: string) => void;

/**
 * Called when the user wants to add a new item.
 *
 * May return a promise. A rejected promise is reported to Vue's error
 * handling (`app.config.errorHandler`).
 *
 * @public
 * @param commit - Call with the new item to add it to the dataset.
 */
export type FCrudDatasetCreateCallback<T> = (
    this: void,
    commit: FCrudDatasetCommitCreate<T>,
) => void | Promise<void>;

/**
 * Called when the user wants to modify an item.
 *
 * May return a promise. A rejected promise is reported to Vue's error
 * handling (`app.config.errorHandler`).
 *
 * @public
 * @param item - A copy of the item to modify. Changes to it do not affect the
 * dataset until passed to `commit`.
 * @param commit - Call with the modified item to update it in the dataset.
 */
export type FCrudDatasetUpdateCallback<T> = (
    this: void,
    item: T,
    commit: FCrudDatasetCommitUpdate<T>,
) => void | Promise<void>;

/**
 * Called when the user wants to remove an item.
 *
 * May return a promise. A rejected promise is reported to Vue's error
 * handling (`app.config.errorHandler`).
 *
 * @public
 * @param item - The item to remove.
 * @param commit - Call when the item should be removed from the dataset.
 */
export type FCrudDatasetDeleteCallback<T> = (
    this: void,
    item: T,
    commit: FCrudDatasetCommitDelete,
) => void | Promise<void>;
