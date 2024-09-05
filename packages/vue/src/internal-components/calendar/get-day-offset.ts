import { FDate } from "@fkui/date";

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
    return 7 - days[days.length - 1].weekDay;
}
