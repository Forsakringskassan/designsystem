import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import FExpandablePanel from "./FExpandablePanel.vue";
import "html-validate/vitest";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return -- technical debt */
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
    it("should match snapshot when collapsed", async () => {
        expect.assertions(2);
        const wrapper = createWrapper();
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot when expanded", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { expanded: true } });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with notification", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { notifications: 2 } });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with generated id", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { id: undefined } });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it("should match snapshot with custom heading level", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({ props: { headerTag: "h3" } });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });

    it('should match snapshot with "outside" slot', async () => {
        expect.assertions(2);
        const wrapper = createWrapper({ slots: { outside: "dolor sit amet" } });
        expect(wrapper.element).toMatchSnapshot();
        await expect(wrapper.html()).toBeValid();
    });
});

describe("attributes", () => {
    it("should pass attributes", () => {
        expect.assertions(1);
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
        const toggle = vi.fn();

        const wrapper = createWrapper({
            attrs: { onToggle: toggle },
        });
        const input = wrapper.get("button");
        await input.trigger("click");

        expect(toggle).toHaveBeenCalled();
    });

    it("should pass listeners", async () => {
        expect.assertions(1);
        const foobar = vi.fn();
        const wrapper = createWrapper({
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("button");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });
});
