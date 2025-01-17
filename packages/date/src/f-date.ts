import dayjs, { Dayjs, ConfigType } from "dayjs";
import { DateFormat } from "./date-format";
import { getLocale, Locale } from "./locale";
import { type IterableDate } from "./range";
import { Weekday } from "./weekday";

type Formatter = Record<DateFormat, string>;

const ISO8601_YYYY_MM_DD = "YYYY-MM-DD";

const formatter: Record<Locale, Formatter> = {
    [Locale.SWEDISH]: {
        [DateFormat.FULL]: "dddd D MMMM YYYY",
        [DateFormat.LONG]: "D MMMM YYYY",
        [DateFormat.ISO8601]: ISO8601_YYYY_MM_DD,
        [DateFormat.YYYYMMDD]: "YYYYMMDD",
    },
    [Locale.ENGLISH]: {
        [DateFormat.FULL]: "dddd, D MMMM YYYY",
        [DateFormat.LONG]: "D MMMM YYYY",
        [DateFormat.ISO8601]: ISO8601_YYYY_MM_DD,
        [DateFormat.YYYYMMDD]: "YYYYMMDD",
    },
};

/**
 * Represents a date (with year, month and day).
 *
 * @public
 */
export class FDate implements IterableDate<FDate> {
    private value: Dayjs;

    private constructor(value?: ConfigType) {
        this.value = dayjs(value, ISO8601_YYYY_MM_DD, true).startOf("day");
    }

    /**
     * Create {@link FDate} with an invalid state.
     *
     * @internal
     */
    private static invalid(): FDate {
        return new FDate("<invalid>");
    }

    /**
     * Create {@link FDate} from current date.
     *
     * ```
     * FDate.now()
     * ```
     *
     * @public
     */
    public static now(): FDate {
        return new FDate();
    }

    /**
     * Create {@link FDate} from ISO8601 string.
     *
     * ```
     * FDate.fromIso("2022-04-20")
     * ```
     *
     * @public
     */
    public static fromIso(value: string): FDate {
        const match = value.match(
            /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/,
        );
        if (match && match.groups) {
            const date = new FDate(value);
            const { month } = match.groups;
            /* in dayjs (and native Date) when the day overflows (e.g. 31 feb)
             * it increases the month, this is not the desired behaviour so we
             * compare the parsed month with the original month, if they differ
             * an invalid FDate is returned instead.*/
            if (date.isValid() && date.month === parseInt(month, 10)) {
                return date;
            }
        }
        return FDate.invalid();
    }

    /**
     * Create {@link FDate} from `Date`.
     *
     * ```
     * FDate.fromDate(new Date())
     * ```
     *
     * @public
     */
    public static fromDate(value: Date): FDate {
        return new FDate(value);
    }

    /**
     * Create {@link FDate} from year, month, day.
     *
     * ```
     * FDate.fromYearMonthDay(2023, 1, 1) // => 2023-01-01
     * FDate.fromYearMonthDay("2023", "01", "01") // => 2023-01-01
     * ```
     *
     * @public
     */
    public static fromYearMonthDay(
        year: number | string,
        month: number | string,
        day: number | string,
    ): FDate {
        const paddedMonth = month.toString().padStart(2, "0");
        const paddedDay = day.toString().padStart(2, "0");
        const iso = `${year}-${paddedMonth}-${paddedDay}`;

        return FDate.fromIso(iso);
    }

    /**
     * Get the year.
     *
     * ```
     * FDate.now().year()// => 2022
     * ```
     *
     * @public
     */
    public get year(): number {
        return this.value.year();
    }

    /**
     * Get the month.
     *
     * Months are one-indexed, so January is month 1.
     *
     * ```
     * FDate.now().month()// => 1-12
     * ```
     *
     * @public
     */
    public get month(): number {
        return this.value.month() + 1;
    }

    /**
     * Get the week according to the Swedish locale.
     *
     * @public
     */
    public get week(): number {
        return this.value.locale(Locale.SWEDISH).week();
    }

    /**
     * Get the day of the month.
     *
     * ```
     * FDate.now().day// => 1-31
     * ```
     *
     * @public
     */
    public get day(): number {
        return this.value.date();
    }

    /**
     * Get the name of the month.
     *
     * ```
     * FDate.now().monthName// => January
     * ```
     *
     * @public
     */
    public get monthName(): string {
        if (this.isValid()) {
            return this.value.locale(getLocale()).format("MMMM");
        } else {
            return "";
        }
    }

    /**
     * Get the short name of the month.
     *
     * ```
     * FDate.now().monthNameShort// => Jan
     * ```
     *
     * @public
     */
    public get monthNameShort(): string {
        if (this.isValid()) {
            return this.value.locale(getLocale()).format("MMM");
        } else {
            return "";
        }
    }

    /**
     * Get the name of the day.
     *
     * ```
     * FDate.now().dayName// => Monday
     * ```
     *
     * @public
     */
    public get dayName(): string {
        if (this.isValid()) {
            return this.value.locale(getLocale()).format("dddd");
        } else {
            return "";
        }
    }

    /**
     * Get the short name of the day.
     *
     * ```
     * FDate.now().dayNameShort// => Mon
     * ```
     *
     * @public
     */
    public get dayNameShort(): string {
        if (this.isValid()) {
            return this.value.locale(getLocale()).format("ddd");
        } else {
            return "";
        }
    }

    /**
     * Get number of the day in a week.
     * Returns `Weekday` enum.
     * If date is invalid, `0` is returned.
     *
     * ```
     * FDate.now().weekDay// => Weekday.MONDAY / 1
     * ```
     *
     * @public
     */
    public get weekDay(): Weekday | 0 {
        if (!this.isValid()) {
            return 0;
        }

        const result = parseInt(this.value.format("d"), 10);

        if (!result) {
            return Weekday.SUNDAY;
        }

        return result as Weekday;
    }

    /**
     * This returns a `boolean` indicating whether the FDate object contains a valid date or not.
     *
     * ```
     * FDate().isValid()// => boolean
     * ```
     *
     * @public
     */
    public isValid(): boolean {
        return this.value.isValid();
    }

    /**
     * Returns a cloned {@link FDate} object and set it to the start of month.
     *
     * @public
     */
    public startOfMonth(): FDate {
        return new FDate(this.value.startOf("month"));
    }

    /**
     * Returns a cloned {@link FDate} object and set it to the end of month.
     *
     * @public
     */
    public endOfMonth(): FDate {
        return new FDate(this.value.endOf("month"));
    }

    /**
     * Returns a new {@link FDate} object with a specified amount of days added.
     * Specify a negative amount in order to subtract days.
     *
     * ```
     * FDate().addDays(7)// => FDate
     * ```
     *
     * @public
     */
    public addDays(value: number): FDate {
        return new FDate(this.value.add(value, "day"));
    }

    /**
     * Returns a cloned {@link FDate} object with a specified amount of months added.
     * Specify a negative amount in order to subtract months.
     *
     * ```
     * FDate().addMonths(7)// => FDate
     * ```
     *
     * @public
     */
    public addMonths(value: number): FDate {
        return new FDate(this.value.add(value, "month"));
    }

    /**
     * Returns a new {@link FDate} object with a specified amount of years added.
     * Specify a negative amount in order to subtract years.
     *
     * ```
     * FDate().addYears(7)// => FDate
     * ```
     *
     * @public
     */
    public addYears(value: number): FDate {
        return new FDate(this.value.add(value, "year"));
    }

    public next(): FDate {
        return this.addDays(1);
    }

    /**
     * Compares two {@link FDate} objects and returns `true` if they represent the
     * same date.
     *
     * Invalid dates always returns `false`.
     *
     * @public
     * @param rhs - The date to compare with.
     * @returns `true` if the dates represent the same date.
     */
    public equals(rhs: FDate | string): boolean {
        if (typeof rhs === "string") {
            rhs = FDate.fromIso(rhs);
        }
        return this.value.isSame(rhs.value, "day");
    }

    /**
     * Returns true if this date is before given date.
     *
     * If the dates are the same this function returns false.
     */
    public isBefore(rhs: FDate | string): boolean {
        if (typeof rhs === "string") {
            rhs = FDate.fromIso(rhs);
        }
        return this.value.isBefore(rhs.value, "day");
    }

    /**
     * Returns true if this date is after given date.
     *
     * If the dates are the same this function returns false.
     */
    public isAfter(rhs: FDate | string): boolean {
        if (typeof rhs === "string") {
            rhs = FDate.fromIso(rhs);
        }
        return this.value.isAfter(rhs.value, "day");
    }

    /**
     * Compares two {@link FDate} objects. Returns and integer indicating whenever
     * `a` comes before or after or is equal to `b`.
     *
     * - `-1` if `a` beomes before `b`.
     * - `0` if `a` and `b` are the same date.
     * - `1` if `a` beomes after `b`.
     *
     * If either or both date is invalid the result is undefined behaviour and
     * should not be relied on. Use {@link FDate.isValid} to ensure validity
     * first, e.g. `myArray.filter(it => it.isValid())` before sorting.
     *
     * @public
     * @param a - First date object to compare.
     * @param b - Second date object to compare.
     * @returns `-1`, `0` or `1`
     */
    public static compare(a: FDate | string, b: FDate | string): number {
        if (typeof a === "string") {
            a = FDate.fromIso(a);
        }
        if (typeof b === "string") {
            b = FDate.fromIso(b);
        }
        const aInvalid = !a.isValid();
        const bInvalid = !b.isValid();
        if (aInvalid || bInvalid) {
            if (aInvalid && bInvalid) {
                return 0;
            } else if (aInvalid) {
                return 1;
            } else {
                return -1;
            }
        }
        if (a.equals(b)) {
            return 0;
        } else if (a.isBefore(b)) {
            return -1;
        } else {
            return 1;
        }
    }

    /**
     * Returns a string representation of the date.
     *
     * ```
     * FDate().toString() // "2022-05-04"
     * FDate().toString(DateFormat.FULL) // "onsdag 4 maj 2022"
     * FDate().toString(DateFormat.LONG) // "4 maj 2022"
     * FDate().toString(DateFormat.ISO8601) // "2022-04-20"
     * ```
     *
     * @public
     * @param format - Format to use.
     */
    public toString(format: DateFormat = DateFormat.ISO8601): string {
        if (this.isValid()) {
            const template = formatter[getLocale()][format];
            return this.value.locale(getLocale()).format(template);
        } else {
            return "";
        }
    }

    /**
     * To serialize as an ISO8601 string.
     *
     * ```
     * FDate().toJSON() // "2019-01-25"
     * ```
     *
     * @public
     */
    public toJSON(): string {
        return this.toString(DateFormat.ISO8601);
    }
}
