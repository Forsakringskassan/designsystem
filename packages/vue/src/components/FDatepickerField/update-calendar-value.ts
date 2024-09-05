import { FDate } from "@fkui/date";
import { isInvalidMonth } from "../../internal-components/calendar/is-invalid-month";
import FDatepickerField from "./FDatepickerField.vue";

/**
 * @public
 */
export function updateCalendarValue(
    this: InstanceType<typeof FDatepickerField>,
    newValue: string,
): void {
    const newCalendarValue = FDate.fromIso(newValue);

    if (!newCalendarValue.isValid()) {
        this.calendarValue = undefined;
    } else if (isInvalidMonth(newCalendarValue, this.minDate, this.maxDate)) {
        this.calendarValue = undefined;
    } else if (!this.isDateEnabled(newCalendarValue)) {
        this.calendarValue = undefined;
    } else if (
        !this.calendarValue ||
        !this.calendarValue.equals(newCalendarValue)
    ) {
        this.calendarValue = newCalendarValue;
    }
}
