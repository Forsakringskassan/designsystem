import { FDate } from "@fkui/date";
import { updateCalendarValue } from "./update-calendar-value";
import FDatepickerField from "./FDatepickerField.vue";

it("should update to new value", () => {
    expect.assertions(1);
    const context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        isDateEnabled: () => true,
    } as unknown as InstanceType<typeof FDatepickerField>;
    updateCalendarValue.call(context, "2022-12-25");
    expect(context.calendarValue?.toString()).toBe("2022-12-25");
});

it("should not update reference if the value is the same", () => {
    expect.assertions(1);
    const context = {
        get calendarValue(): FDate {
            return FDate.fromIso("2022-12-24");
        },
        set calendarValue(_: FDate) {
            /* do nothing */
        },
        isDateEnabled: () => true,
    } as unknown as InstanceType<typeof FDatepickerField>;
    const setter = jest.spyOn(context, "calendarValue", "set");
    updateCalendarValue.call(context, "2022-12-24");
    expect(setter).not.toHaveBeenCalled();
});

it("should set to undefined if value is invalid", () => {
    expect.assertions(1);
    const context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        isDateEnabled: () => true,
    } as unknown as InstanceType<typeof FDatepickerField>;
    updateCalendarValue.call(context, "invalid");
    expect(context.calendarValue).toBeUndefined();
});

it("should set to undefined when new date is before minDate", () => {
    expect.assertions(1);
    const context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        minDate: FDate.fromIso("2022-11-01"),
        isDateEnabled: () => true,
    } as unknown as InstanceType<typeof FDatepickerField>;
    updateCalendarValue.call(context, "2022-10-15");
    expect(context.calendarValue?.toString()).toBeUndefined();
});

it("should set to undefined when new date is after maxDate", () => {
    expect.assertions(1);
    const context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        maxDate: FDate.fromIso("2023-01-31"),
        isDateEnabled: () => true,
    } as unknown as InstanceType<typeof FDatepickerField>;
    updateCalendarValue.call(context, "2023-02-15");
    expect(context.calendarValue?.toString()).toBeUndefined();
});

it("should set to undefined when date is not enabled", () => {
    expect.assertions(1);
    const context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        isDateEnabled: () => false,
    } as unknown as InstanceType<typeof FDatepickerField>;
    updateCalendarValue.call(context, "2022-12-25");
    expect(context.calendarValue).toBeUndefined();
});
