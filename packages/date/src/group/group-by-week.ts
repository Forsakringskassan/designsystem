import { type FDate } from "../f-date";
import { range } from "../range";
import { Weekday } from "../weekday";

/**
 * Returns days in period grouped by week.
 *
 * @public
 */
export function groupByWeek(
    begin: FDate,
    end: FDate,
): Array<{ week: number; days: FDate[] }> {
    const result = [];
    let days: FDate[] | undefined;

    for (const dayIterator of Array.from(range(begin, end))) {
        if (!days || dayIterator.weekDay === Weekday.MONDAY) {
            days = [];
            result.push({ week: dayIterator.week, days });
        }

        days.push(dayIterator);
    }

    return result;
}
