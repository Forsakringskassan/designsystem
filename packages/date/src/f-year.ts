import { type Clampable } from "./clamp";
import { type FDate } from "./f-date";
import { type IterableDate } from "./range";

/**
 * Represents a year.
 *
 * @public
 * @since v6.12.0
 */
export class FYear implements IterableDate<FYear>, Clampable<FYear> {
    private _value: number;

    private constructor(value: number) {
        if (Math.round(value) === value) {
            this._value = value;
        } else {
            this._value = NaN;
        }
    }

    /**
     * Create {@link FYear} from current date.
     *
     * @example
     *
     * ```ts
     * FYear.now();
     * ```
     *
     * @public
     */
    public static now(): FYear {
        const value = new Date().getFullYear();
        return new FYear(value);
    }

    /**
     * Create {@link FYear} from a year (stored as number or string with four
     * digits).
     *
     * @example
     *
     * ```ts
     * FYear.fromYear(1999);
     * FYear.fromYear("1999");
     * ```
     *
     * @public
     * @param value - The year to set the `FYear` object to.
     */
    public static fromYear(value: number | string): FYear {
        const parsed = typeof value === "string" ? parseInt(value, 10) : value;
        return new FYear(parsed);
    }

    /**
     * Create {@link FYear} from an `FDate` or `Date` object.
     *
     * @example
     *
     * ```ts
     * FYear.fromDate(FDate.now());
     * FYear.fromDate(new Date());
     * ```
     *
     * @public
     * @param value - The date to get year from.
     */
    public static fromDate(value: FDate | Date): FYear {
        if (value instanceof Date) {
            return new FYear(value.getFullYear());
        } else {
            return new FYear(value.year);
        }
    }

    /**
     * Get the year as number (four digits)
     *
     * ```
     * FYear.now().value; // => 1999
     * ```
     *
     * @public
     */
    public get value(): number {
        return this._value;
    }

    /**
     * This returns a `boolean` indicating whether the FYear object contains a
     * valid year or not.
     *
     * ```
     * FYear().isValid(); // => boolean
     * ```
     *
     * @public
     */
    public isValid(): boolean {
        return !isNaN(this._value);
    }

    /**
     * Returns a new {@link FYear} object with a specified amount of years
     * added. Specify a negative amount in order to subtract years.
     *
     * ```
     * FYear().addYears(7); // => FYear
     * ```
     *
     * @public
     * @param amount - The amount of years to add to this one.
     */
    public addYears(amount: number): FYear {
        return new FYear(this._value + amount);
    }

    /**
     * Returns a new {@link FYear} object with the year before this one.
     *
     * ```
     * FYear(2025).previous(); // => FYear { 2024 }
     * ```
     *
     * @public
     */
    public previous(): FYear {
        return this.addYears(-1);
    }

    /**
     * Returns a new {@link FYear} object with the year after this one.
     *
     * ```
     * FYear(2025).next(); // => FYear { 2026 }
     * ```
     *
     * @public
     */
    public next(): FYear {
        return this.addYears(1);
    }

    /**
     * Compares two {@link FYear} objects and returns `true` if they represent
     * the same year.
     *
     * Invalid dates always returns `false`.
     *
     * @public
     * @param rhs - The year to compare with.
     * @returns `true` if the years are the same.
     */
    public equals(rhs: FYear | number | string): boolean {
        return this._value === FYear.toValue(rhs);
    }

    /**
     * Returns true if this year is before given year.
     *
     * If the years are the same this function returns false.
     *
     * @public
     * @param rhs - The year to compare with.
     * @returns `true` if this year is before given year.
     */
    public isBefore(rhs: FYear | number | string): boolean {
        return this._value < FYear.toValue(rhs);
    }

    /**
     * Returns true if this year is after given year.
     *
     * If the years are the same this function returns false.
     *
     * @public
     * @param rhs - The year to compare with.
     * @returns `true` if this year is after given year.
     */
    public isAfter(rhs: FYear | number | string): boolean {
        return this._value > FYear.toValue(rhs);
    }

    /**
     * Compares two {@link FYear} objects. Returns and integer indicating
     * whenever `a` comes before or after or is equal to `b`.
     *
     * - `-1` if `a` beomes before `b`.
     * - `0` if `a` and `b` are the same year.
     * - `1` if `a` beomes after `b`.
     *
     * If either or both years is invalid the result is undefined behaviour and
     * should not be relied on. Use {@link FYear.isValid} to ensure validity
     * first, e.g. `myArray.filter(it => it.isValid())` before sorting.
     *
     * @example
     *
     * ```ts
     * yearArray.sort(FYear.compare);
     * ```
     *
     * @public
     * @param a - First year object to compare.
     * @param b - Second year object to compare.
     * @returns `-1`, `0` or `1`
     */
    public static compare(
        a: FYear | number | string,
        b: FYear | number | string,
    ): number {
        const ax = FYear.toFYear(a);
        const bx = FYear.toFYear(b);
        const aInvalid = !ax.isValid();
        const bInvalid = !bx.isValid();
        if (aInvalid || bInvalid) {
            if (aInvalid && bInvalid) {
                return 0;
            } else if (aInvalid) {
                return 1;
            } else {
                return -1;
            }
        }
        return Math.max(Math.min(ax._value - bx._value, 1), -1);
    }

    /**
     * Returns a string representation of the year.
     *
     * @public
     */
    public toString(): string {
        if (this.isValid()) {
            return this._value.toString();
        } else {
            return "";
        }
    }

    /**
     * Serializes to a JSON value.
     *
     * @public
     */
    public toJSON(): number | null {
        if (this.isValid()) {
            return this._value;
        } else {
            return null;
        }
    }

    /**
     * @internal
     */
    private static toFYear(value: FYear | number | string): FYear {
        if (value instanceof FYear) {
            return value;
        } else {
            return FYear.fromYear(value);
        }
    }

    /**
     * @internal
     */
    private static toValue(value: FYear | number | string): number {
        return this.toFYear(value)._value;
    }
}
