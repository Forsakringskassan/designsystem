/**
 * Represents a date unit than can be iterated over.
 *
 * @public
 */
export interface IterableDate<T> {
    /** returns true if two date units represents the same date */
    equals(rhs: T): boolean;
    /** returns true if this date is before the other (false if they are the same */
    isBefore(rhs: T): boolean;
    /** returns the next date (e.g. next day, week, month, etc) */
    next(): T;
}
