import { type FDate } from "@fkui/date";

/**
 * Returns passed days in week before first day in array.
 *
 * @public
 */
export function getDayStartOffset(days: FDate[]): number {
    return days[0].weekDay - 1;
}

/**
 * Returns remaining days in week after last day in array.
 *
 * @public
 */
export function getDayEndOffset(days: FDate[]): number {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
    return 7 - days.at(-1)!.weekDay;
}
