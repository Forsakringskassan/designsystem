import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import FExpandableParagraph from "./FExpandableParagraph.vue";
import "html-validate/vitest";

describe("snapshots", () => {
    it("should match snapshot when collapsed", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandableParagraph, {
            props: {
                id: "my-id",
                expanded: false,
            },
            slots: {
                title: "My expandable component",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot when expanded", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandableParagraph, {
            props: {
                id: "my-id",
                expanded: true,
            },
            slots: {
                title: "My expandable component",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with custom heading level", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandableParagraph, {
            props: {
                id: "my-id",
                expanded: false,
                headerTag: "h3",
            },
            slots: {
                title: "My expandable component",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with list styling", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandableParagraph, {
            props: {
                id: "my-id",
                expanded: false,
                headerTag: "h3",
                list: true,
            },
            slots: {
                title: "My expandable component",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with related information", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FExpandableParagraph, {
            props: {
                id: "my-id",
                expanded: false,
                headerTag: "h3",
            },
            slots: {
                title: "My expandable component",
                related: "dolor sit amet",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });
});

describe("header-visual-tag", () => {
    it("should default to h4 visual heading", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FExpandableParagraph);
        const heading = wrapper.get(".expandable-paragraph__heading");
        expect(heading.classes()).toEqual([
            "expandable-paragraph__heading",
            "heading--h4",
        ]);
    });

    it("should change the visual heading class when used", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FExpandableParagraph, {
            props: { headerVisualTag: "h6" },
        });
        const heading = wrapper.get(".expandable-paragraph__heading");
        expect(heading.classes()).toEqual([
            "expandable-paragraph__heading",
            "heading--h6",
        ]);
    });
});

describe("events", () => {
    it("should emit toggle event", async () => {
        expect.assertions(1);
        const toggle = vi.fn();

        const wrapper = shallowMount(FExpandableParagraph, {
            attrs: { onToggle: toggle },
        });
        const input = wrapper.get("button");
        await input.trigger("click");

        expect(toggle).toHaveBeenCalled();
    });

    it("should pass listeners", async () => {
        expect.assertions(1);
        const foobar = vi.fn();
        const wrapper = shallowMount(FExpandableParagraph, {
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("button");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });
});
