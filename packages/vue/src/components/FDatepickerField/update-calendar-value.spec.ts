import { FDate } from "@fkui/date";
import { updateCalendarValue } from "./update-calendar-value";

type Context = Parameters<typeof updateCalendarValue>[0];

it("should update to new value", () => {
    expect.assertions(1);
    const context: Context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        isDateEnabled: () => true,
        minDate: undefined,
        maxDate: undefined,
    };
    updateCalendarValue(context, "2022-12-25");
    expect(context.calendarValue?.toString()).toBe("2022-12-25");
});

it("should not update reference if the value is the same", () => {
    expect.assertions(1);
    const context: Context = {
        get calendarValue(): FDate {
            return FDate.fromIso("2022-12-24");
        },
        set calendarValue(_: FDate) {
            /* do nothing */
        },
        isDateEnabled: () => true,
        minDate: undefined,
        maxDate: undefined,
    };
    const setter = jest.spyOn(context, "calendarValue", "set");
    updateCalendarValue(context, "2022-12-24");
    expect(setter).not.toHaveBeenCalled();
});

it("should set to undefined if value is invalid", () => {
    expect.assertions(1);
    const context: Context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        isDateEnabled: () => true,
        minDate: undefined,
        maxDate: undefined,
    };
    updateCalendarValue(context, "invalid");
    expect(context.calendarValue).toBeUndefined();
});

it("should set to undefined when new date is before minDate", () => {
    expect.assertions(1);
    const context: Context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        isDateEnabled: () => true,
        minDate: FDate.fromIso("2022-11-01"),
        maxDate: undefined,
    };
    updateCalendarValue(context, "2022-10-15");
    expect(context.calendarValue?.toString()).toBeUndefined();
});

it("should set to undefined when new date is after maxDate", () => {
    expect.assertions(1);
    const context: Context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        isDateEnabled: () => true,
        minDate: undefined,
        maxDate: FDate.fromIso("2023-01-31"),
    };
    updateCalendarValue(context, "2023-02-15");
    expect(context.calendarValue?.toString()).toBeUndefined();
});

it("should set to undefined when date is not enabled", () => {
    expect.assertions(1);
    const context: Context = {
        calendarValue: FDate.fromIso("2022-12-24"),
        isDateEnabled: () => false,
        minDate: undefined,
        maxDate: undefined,
    };
    updateCalendarValue(context, "2022-12-25");
    expect(context.calendarValue).toBeUndefined();
});
