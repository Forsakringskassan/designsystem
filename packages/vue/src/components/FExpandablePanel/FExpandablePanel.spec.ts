import { VueWrapper, mount } from "@vue/test-utils";
import { type ConfigData } from "html-validate";
import FExpandablePanel from "./FExpandablePanel.vue";
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
    return mount(FExpandablePanel, {
        attrs: { ...attrs },
        props: { id: "my-id", ...props },
        slots: { title: "My panel title", body: "Lorem ipsum", ...slots },
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

    it("should match snapshot with notification", () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { notifications: 2 } });
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });

    it("should match snapshot with generated id", () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { id: undefined } });
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });

    it("should match snapshot with custom heading level", () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { headerTag: "h3" } });
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });

    it('should match snapshot with "outside" slot', () => {
        expect.assertions(2);
        const wrapper = createWrapper({ slots: { outside: "dolor sit amet" } });
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.element).toHTMLValidate(config);
    });
});

describe("attributes", () => {
    it("should pass attributes", () => {
        const wrapper = createWrapper({
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
