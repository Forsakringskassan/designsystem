import { FDate } from "@fkui/date";
import { isInvalidMonth } from "../../internal-components/calendar/is-invalid-month";

/**
 * @internal
 */
export function updateCalendarValue(
    datepicker: {
        calendarValue: FDate | undefined;
        readonly minDate: FDate | undefined;
        readonly maxDate: FDate | undefined;
        isDateEnabled(date: FDate): boolean;
    },
    newValue: string,
): void {
    const { isDateEnabled, minDate, maxDate } = datepicker;
    const newCalendarValue = FDate.fromIso(newValue);

    if (!newCalendarValue.isValid()) {
        datepicker.calendarValue = undefined;
    } else if (isInvalidMonth(newCalendarValue, minDate, maxDate)) {
        datepicker.calendarValue = undefined;
    } else if (!isDateEnabled(newCalendarValue)) {
        datepicker.calendarValue = undefined;
    } else if (
        !datepicker.calendarValue ||
        !datepicker.calendarValue.equals(newCalendarValue)
    ) {
        datepicker.calendarValue = newCalendarValue;
    }
}
