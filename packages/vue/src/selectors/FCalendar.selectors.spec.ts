import { FDate } from "@fkui/date";
import { mount } from "@vue/test-utils";
import { FCalendar } from "../components";
import { FCalendarSelectors } from "./FCalendar.selectors";

const defaultMountOptions = {
    global: { stubs: ["ICalendarNavbar", "ICalendarMonth"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FCalendar, {
        ...defaultMountOptions,
        props: {
            modelValue: FDate.fromIso("2024-06-15"),
            minDate: FDate.fromIso("2020-01-01"),
            maxDate: FDate.fromIso("2030-12-31"),
        },
    });
    const { selector } = FCalendarSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".calendar__wrapper");
    expect(root.classes()).toContain("calendar__wrapper");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FCalendar, {
        ...defaultMountOptions,
        props: {
            modelValue: FDate.fromIso("2024-06-15"),
            minDate: FDate.fromIso("2020-01-01"),
            maxDate: FDate.fromIso("2030-12-31"),
        },
        attrs: { "data-test": "calendar" },
    });
    const { selector } = FCalendarSelectors('[data-test="calendar"]');
    expect(selector).toBe('[data-test="calendar"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("navCaption() should return a selector string", () => {
    expect.assertions(1);
    const { navCaption } = FCalendarSelectors();
    expect(navCaption()).toContain(".calendar-navbar__month--title");
});

it("navPrevButton() should return a selector string", () => {
    expect.assertions(1);
    const { navPrevButton } = FCalendarSelectors();
    expect(navPrevButton()).toContain(".calendar-navbar__arrow--previous");
});

it("navNextButton() should return a selector string", () => {
    expect.assertions(1);
    const { navNextButton } = FCalendarSelectors();
    expect(navNextButton()).toContain(".calendar-navbar__arrow--next");
});

it("navYearSelectorButton() should return a selector string", () => {
    expect.assertions(1);
    const { navYearSelectorButton } = FCalendarSelectors();
    expect(navYearSelectorButton()).toContain(
        ".calendar-navbar__year-selector-button",
    );
});

it("dayButton() should return a selector for the given date", () => {
    expect.assertions(1);
    const { dayButton } = FCalendarSelectors();
    expect(dayButton("2024-06-15")).toContain('[data-date="2024-06-15"]');
});

it("selectedDay() should return a selector string", () => {
    expect.assertions(1);
    const { selectedDay } = FCalendarSelectors();
    expect(selectedDay()).toContain(".calendar-day--selected");
});

it("todayDay() should return a selector string", () => {
    expect.assertions(1);
    const { todayDay } = FCalendarSelectors();
    expect(todayDay()).toContain(".calendar-day--today");
});

it("yearSelector() should return a selector string", () => {
    expect.assertions(1);
    const { yearSelector } = FCalendarSelectors();
    expect(yearSelector()).toContain(".calendar__year-selector");
});
