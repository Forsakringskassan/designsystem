import { FDate } from "@fkui/date";
import { type TranslateFunction } from "@fkui/logic";
import { isInvalidMonth } from "./is-invalid-month";

/**
 * Returns a message for when attempting to navigate to a month outside of the min or max date.
 *
 * @internal
 */
export function getMessage(
    $t: TranslateFunction,
    date: FDate,
    minDate: FDate,
    maxDate: FDate,
): string | undefined {
    const invalidMonth = isInvalidMonth(date, minDate, maxDate);
    if (!invalidMonth) {
        return undefined;
    }

    if (date.isBefore(minDate)) {
        const { day, monthName, year } = minDate;
        return $t(
            "fkui.calendar.error.below-min-date",
            "Du kan inte välja en dag före {{day}} {{month}} {{year}}",
            { day: day, month: monthName, year: year },
        );
    }

    if (date.isAfter(maxDate)) {
        const { day, monthName, year } = maxDate;
        return $t(
            "fkui.calendar.error.above-max-date",
            "Du kan inte välja en dag efter {{day}} {{month}} {{year}}",
            { day: day, month: monthName, year: year },
        );
    }
}
