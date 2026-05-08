import { mount } from "@vue/test-utils";
import { FProgressbar } from "../components";
import { FProgressbarSelectors } from "./FProgressbar.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FProgressbar, {
        props: {
            "aria-label": "Progress",
            value: 1,
            steps: [{ name: "step1" }, { name: "step2" }],
        },
    });
    const { selector } = FProgressbarSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".progress");
    expect(root.classes()).toContain("progress");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FProgressbar, {
        props: {
            "aria-label": "Progress",
            value: 1,
            steps: [{ name: "step1" }, { name: "step2" }],
        },
        attrs: { "data-test": "my-progress" },
    });
    const { selector } = FProgressbarSelectors('[data-test="my-progress"]');
    expect(selector).toBe('[data-test="my-progress"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("meter() should return the progress meter element", () => {
    expect.assertions(1);
    const wrapper = mount(FProgressbar, {
        props: {
            "aria-label": "Progress",
            value: 1,
            steps: [{ name: "step1" }, { name: "step2" }],
        },
    });
    const { meter } = FProgressbarSelectors();
    expect(wrapper.find(meter()).exists()).toBeTruthy();
});
