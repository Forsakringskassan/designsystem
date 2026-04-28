import { mount } from "@vue/test-utils";
import ITableHeaderSelectable from "./ITableHeaderSelectable.vue";

const selector = ".table-ng__column--selectable input";

describe("Aria label", () => {
    it("should show uncheck all if all are selected", () => {
        expect.assertions(1);

        const wrapper = mount(ITableHeaderSelectable, {
            props: { selectable: "multi", state: true },
        });

        const input = wrapper.get(selector);
        expect(input.attributes("aria-label")).toBe("Avmarkera alla rader");
    });

    it("should show check all if none are selected", () => {
        expect.assertions(1);

        const wrapper = mount(ITableHeaderSelectable, {
            props: { selectable: "multi", state: false },
        });

        const input = wrapper.get(selector);
        expect(input.attributes("aria-label")).toBe("Välj alla rader");
    });

    it("should show check all if some are selected", () => {
        expect.assertions(1);

        const wrapper = mount(ITableHeaderSelectable, {
            props: { selectable: "multi", state: "indeterminate" },
        });

        const input = wrapper.get(selector);
        expect(input.attributes("aria-label")).toBe("Välj alla rader");
    });
});

describe("Visibility", () => {
    it("should show checkbox for multi select", () => {
        expect.assertions(1);
        const wrapper = mount(ITableHeaderSelectable, {
            props: { selectable: "multi", state: false },
        });

        const input = wrapper.find(selector);
        expect(input.exists()).toBeTruthy();
    });

    it("should not show checkbox for single select", () => {
        expect.assertions(1);
        const wrapper = mount(ITableHeaderSelectable, {
            props: { selectable: "single", state: false },
        });

        const input = wrapper.find(selector);
        expect(input.exists()).toBeFalsy();
    });
});
