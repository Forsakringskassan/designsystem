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
        isDateEnabled(this: void, date: FDate): boolean;
    },
    newValue: string,
): void {
    const { isDateEnabled, minDate, maxDate } = datepicker;
    const newCalendarValue = FDate.fromIso(newValue);

    /* eslint-disable unicorn/no-duplicate-if-branches -- technical debt */
    if (!newCalendarValue.isValid()) {
        datepicker.calendarValue = undefined;
    } else if (isInvalidMonth(newCalendarValue, minDate, maxDate)) {
        datepicker.calendarValue = undefined;
    } else if (!isDateEnabled(newCalendarValue)) {
        datepicker.calendarValue = undefined;
    } else if (!datepicker.calendarValue?.equals(newCalendarValue)) {
        datepicker.calendarValue = newCalendarValue;
    }
    /* eslint-enable unicorn/no-duplicate-if-branches */
}
