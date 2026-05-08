import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { mount } from "@vue/test-utils";
import { FDatepickerField } from "../components";
import { ValidationPlugin } from "../plugins";
import { FDatepickerFieldSelectors } from "./FDatepickerField.selectors";

const defaultMountOptions = {
    attachTo: createPlaceholderInDocument(),
    global: {
        stubs: ["f-icon", "f-calendar"],
        plugins: [ValidationPlugin],
    },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FDatepickerField, {
        ...defaultMountOptions,
        slots: { default: "Date" },
    });
    const { selector } = FDatepickerFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".datepicker-field");
    expect(root.classes()).toContain("datepicker-field");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FDatepickerField, {
        ...defaultMountOptions,
        slots: { default: "Date" },
        attrs: { "data-test": "date" },
    });
    const { selector } = FDatepickerFieldSelectors('[data-test="date"]');
    expect(selector).toBe('[data-test="date"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("input() should return the text input element", () => {
    expect.assertions(1);
    const wrapper = mount(FDatepickerField, {
        ...defaultMountOptions,
        slots: { default: "Date" },
    });
    const { input } = FDatepickerFieldSelectors();
    expect(wrapper.get(input()).element.tagName.toLowerCase()).toBe("input");
});

it("label() should return the label element", () => {
    expect.assertions(1);
    const wrapper = mount(FDatepickerField, {
        ...defaultMountOptions,
        slots: { default: "Date" },
    });
    const { label } = FDatepickerFieldSelectors();
    expect(wrapper.find(label()).exists()).toBeTruthy();
});

it("errorMessage() should not exist by default", () => {
    expect.assertions(1);
    const wrapper = mount(FDatepickerField, {
        ...defaultMountOptions,
        slots: { default: "Date" },
    });
    const { errorMessage } = FDatepickerFieldSelectors();
    expect(wrapper.find(errorMessage()).exists()).toBeFalsy();
});

it("calendarButton() should return the calendar toggle button", () => {
    expect.assertions(1);
    const wrapper = mount(FDatepickerField, {
        ...defaultMountOptions,
        slots: { default: "Date" },
    });
    const { calendarButton } = FDatepickerFieldSelectors();
    expect(wrapper.get(calendarButton()).element.tagName.toLowerCase()).toBe(
        "button",
    );
});

it("calendarPopup() should not exist when calendar is closed", () => {
    expect.assertions(1);
    const wrapper = mount(FDatepickerField, {
        ...defaultMountOptions,
        slots: { default: "Date" },
    });
    const { calendarPopup } = FDatepickerFieldSelectors();
    expect(wrapper.find(calendarPopup()).exists()).toBeFalsy();
});

it("calendar() should not exist when calendar is closed", () => {
    expect.assertions(1);
    const wrapper = mount(FDatepickerField, {
        ...defaultMountOptions,
        slots: { default: "Date" },
    });
    const { calendar } = FDatepickerFieldSelectors();
    expect(wrapper.find(calendar()).exists()).toBeFalsy();
});
