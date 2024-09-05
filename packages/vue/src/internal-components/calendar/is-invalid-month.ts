import { FDate } from "@fkui/date";

export function isMonthBefore(date: FDate, minDate?: FDate): boolean {
    return Boolean(minDate && date.isBefore(minDate.startOfMonth()));
}

export function isMonthAfter(date: FDate, maxDate?: FDate): boolean {
    return Boolean(maxDate && date.isAfter(maxDate.endOfMonth()));
}

/**
 * Returns true if the month of the passed date is outside of allowed bounds.
 */
export function isInvalidMonth(
    date: FDate,
    minDate?: FDate,
    maxDate?: FDate,
): boolean {
    const startOfMonth = date.startOfMonth();
    return (
        isMonthBefore(startOfMonth, minDate) ||
        isMonthAfter(startOfMonth, maxDate)
    );
}
