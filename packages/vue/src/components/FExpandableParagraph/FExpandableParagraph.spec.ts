import { VueWrapper, mount, shallowMount } from "@vue/test-utils";
import { type ConfigData } from "html-validate";
import FExpandableParagraph from "./FExpandableParagraph.vue";
import "html-validate/jest";

const config: ConfigData = {
    root: true,
    rules: {
        "no-inline-style": "off",
    },
};

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FExpandableParagraph, {
        attrs: { ...attrs },
        props: { id: "my-id", ...props },
        slots: {
            title: "My expandable component",
            default: "Lorem ipsum",
            ...slots,
        },
        global: {
            stubs: ["f-expand", "f-icon"],
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot when collapsed", () => {
        expect.assertions(2);
        const wrapper = createWrapper();
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });

    it("should match snapshot when expanded", () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { expanded: true } });
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });

    it("should match snapshot with custom heading level", () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { headerTag: "h3" } });
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });

    it("should match snapshot with list styling", () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            props: { headerTag: "h3", list: true },
        });
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });

    it("should match snapshot with related information", () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            props: { headerTag: "h3" },
            slots: { related: "dolor sit amet" },
        });
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });
});

describe("header-visual-tag", () => {
    it("should default to h4 visual heading", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FExpandableParagraph, {});
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
        const toggle = jest.fn();

        const wrapper = createWrapper({
            attrs: { onToggle: toggle },
        });
        const input = wrapper.get("button");
        await input.trigger("click");

        expect(toggle).toHaveBeenCalled();
    });

    it("should pass listeners", async () => {
        const foobar = jest.fn();
        const wrapper = createWrapper({
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("button");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });
});
