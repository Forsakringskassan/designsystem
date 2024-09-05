import { FDate } from "@fkui/date";
import {
    isMonthAfter,
    isMonthBefore,
    isInvalidMonth,
} from "../../internal-components/calendar/is-invalid-month";

/**
 * Resolves month to display when opening calendar.
 *
 * @internal
 */
export function getDisplayMonth(
    minDate?: FDate,
    maxDate?: FDate,
    selectedDate?: FDate,
    initialMonth?: FDate,
): FDate {
    let effectiveDate;
    if (selectedDate && selectedDate.isValid()) {
        effectiveDate = selectedDate;
    } else if (initialMonth && initialMonth.isValid()) {
        effectiveDate = initialMonth;
    } else {
        effectiveDate = FDate.now();
    }

    let month;
    if (!isInvalidMonth(effectiveDate, minDate, maxDate)) {
        month = effectiveDate.startOfMonth();
    } else if (isMonthBefore(effectiveDate, minDate)) {
        month = minDate?.startOfMonth();
    } else if (isMonthAfter(effectiveDate, maxDate)) {
        month = maxDate?.startOfMonth();
    }

    return month || FDate.now().startOfMonth();
}
