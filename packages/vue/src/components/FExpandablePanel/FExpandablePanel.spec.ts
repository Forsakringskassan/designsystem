import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import FExpandablePanel from "./FExpandablePanel.vue";
import "html-validate/vitest";

describe("snapshots", () => {
    it("should match snapshot when collapsed", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandablePanel, {
            attrs: {
                id: "my-id",
            },
            slots: {
                title: "My panel title",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot when expanded", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandablePanel, {
            attrs: {
                id: "my-id",
            },
            props: {
                expanded: true,
            },
            slots: {
                title: "My panel title",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with notification", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandablePanel, {
            attrs: {
                id: "my-id",
            },
            props: {
                notifications: 2,
            },
            slots: {
                title: "My panel title",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with generated id", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandablePanel, {
            slots: {
                title: "My panel title",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with custom heading level", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandablePanel, {
            attrs: {
                id: "my-id",
            },
            props: {
                headerTag: "h3",
            },
            slots: {
                title: "My panel title",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it('should match snapshot with "outside" slot', async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandablePanel, {
            attrs: {
                id: "my-id",
            },
            slots: {
                title: "My panel title",
                outside: "dolor sit amet",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });
});

describe("attributes", () => {
    it("should pass attributes", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FExpandablePanel, {
            attrs: {
                disabled: true,
            },
        });
        const input = wrapper.get("button");
        expect(input.attributes("disabled")).toBeDefined();
    });
});

describe("events", () => {
    it("should emit toggle event", async () => {
        expect.assertions(1);
        const toggle = vi.fn();
        const wrapper = shallowMount(FExpandablePanel, {
            attrs: { onToggle: toggle },
        });
        const input = wrapper.get("button");
        await input.trigger("click");
        expect(toggle).toHaveBeenCalled();
    });

    it("should pass listeners", async () => {
        expect.assertions(1);
        const foobar = vi.fn();
        const wrapper = shallowMount(FExpandablePanel, {
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("button");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });
});
