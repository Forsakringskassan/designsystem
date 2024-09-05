import { IterableDate } from "./iterable-date";

/**
 * Create and iterator for looping over a date period, e.g. every date between
 * `begin` and `end`. Both `begin` and `end` will be included.
 *
 * Since this is an iterator remember evaluation is lazy and to use
 * `Array.from(..)` if you need a proper array.
 *
 * @example
 *
 * Loop over every date between begin and end:
 *
 * ```ts
 * for (const date of range(begin, end)) {
 *     // do something with date
 * }
 * ```
 *
 * Save an array with all dates between begin and end:
 *
 * ```ts
 * const dates = Array.from(range(begin, end))
 * ```
 *
 * @public
 * @param begin - First date (inclusive)
 * @param end - Last date (inclusive)
 */
export function* range<T extends IterableDate<T>>(
    begin: T,
    end: T,
): Generator<T> {
    if (end.isBefore(begin)) {
        const message = `Begin (${begin.toString()}) must be earlier or equal to end (${end.toString()})`;
        throw new Error(message);
    }

    /* this refers to the date directly after the end */
    const last = end.next();
    for (let it = begin; !it.equals(last); it = it.next()) {
        yield it;
    }
}
