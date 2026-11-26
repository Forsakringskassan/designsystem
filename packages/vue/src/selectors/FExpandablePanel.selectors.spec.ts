import { shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FExpandablePanel } from "../components";
import { FExpandablePanelSelectors } from "./FExpandablePanel.selectors";
import { TestDirective } from "@fkui/vue";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel" },
    });

    const { selector } = FExpandablePanelSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("expandable-panel");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);

    const wrapper = shallowMount(
        {
            template: `<div><f-expandable-panel v-test="'foo'"></f-expandable-panel></div>`,
            components: { FExpandablePanel },
        },
        {
            global: {
                stubs: { FExpandablePanel: false },
                directives: { test: TestDirective },
            },
        },
    );

    const { selector } = FExpandablePanelSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("expandable-panel");
});

it("header() should return the heading button element", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel", expanded: false },
        slots: { title: "Panel" },
    });

    const { header } = FExpandablePanelSelectors();
    const el = wrapper.get(header());
    expect(el.element.tagName.toLowerCase()).toBe("h2");
    expect(el.text()).toContain("Panel");
});

it("toggleButton() should return the heading button element", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel", expanded: false },
    });

    const { toggleButton } = FExpandablePanelSelectors();
    const el = wrapper.get(toggleButton());
    expect(el.element.tagName.toLowerCase()).toBe("button");
});

it("expandCollapseIcon() should return the icon element", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel" },
    });
    const { expandCollapseIcon } = FExpandablePanelSelectors();
    expect(wrapper.find(expandCollapseIcon()).exists()).toBeTruthy();
});

it("body() should return the body element", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel", expanded: true },
        slots: { default: "my-body" },
        global: { stubs: { FExpand: false } },
    });

    const { body } = FExpandablePanelSelectors();
    const el = wrapper.get(body());
    expect(el.text()).toBe("my-body");
});

it("notification() should exist when notifications prop is set", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel", notifications: 3 },
    });
    const { notification } = FExpandablePanelSelectors();
    const el = wrapper.get(notification());
    expect(el.element.getAttribute("title")).toBe("3 notifieringar");
});

it("notification() should not exist when notifications prop is zero", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel", notifications: 0 },
    });
    const { notification } = FExpandablePanelSelectors();
    expect(wrapper.find(notification()).exists()).toBeFalsy();
});

it("relatedInfo() should exist when outside slot is used", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel", expanded: true },
        slots: { outside: "outside" },
        global: { stubs: { FExpand: false } },
    });
    const { relatedInfo } = FExpandablePanelSelectors();
    expect(wrapper.find(relatedInfo()).exists()).toBeTruthy();
});

it("relatedInfo() should not exist when outside slot is not used", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FExpandablePanel, {
        props: { id: "my-panel", expanded: true },
        global: { stubs: { FExpand: false } },
    });
    const { relatedInfo } = FExpandablePanelSelectors();
    expect(wrapper.find(relatedInfo()).exists()).toBeFalsy();
});
