import { walk } from "./walk";

/**
 * Return number of rows from array used to generate the rows in table body.
 *
 * @internal
 * @param rows - Array of rows to count.
 * @param childKey - Key to check for nested rows.
 * @returns Number of rows.
 */
export function getBodyRowCount<T>(rows: T[], childKey?: keyof T): number {
    let count = 0;
    walk(rows, childKey, () => {
        count++;
        return true;
    });
    return count;
}
