import { type ComponentPublicInstance } from "vue";
import { mount, shallowMount } from "@vue/test-utils";
import ITableAnchor from "./ITableAnchor.vue";
import { normalizeTableColumn } from "./table-column";

describe("text", () => {
    interface Row {
        foo?: string | null;
    }

    it("should render empty text when `text` is null", () => {
        expect.assertions(2);
        const row: Row = { foo: undefined };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "anchor",
            header: "header",
            text: () => null,
            href: "",
        });
        const wrapper = shallowMount(
            ITableAnchor as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        expect(wrapper.find("a").exists()).toBeFalsy();
        expect(wrapper.find("td").text()).toBe("");
    });

    it("should render empty text when `text` is empty string", () => {
        expect.assertions(2);
        const row: Row = { foo: undefined };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "anchor",
            header: "header",
            text: () => "",
            href: "",
        });
        const wrapper = shallowMount(
            ITableAnchor as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        expect(wrapper.find("a").exists()).toBeFalsy();
        expect(wrapper.find("td").text()).toBe("");
    });

    it("should render anchor with text when `text` is set", () => {
        expect.assertions(2);
        const row: Row = { foo: undefined };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "anchor",
            header: "header",
            text: () => "my awesome anchor",
            href: "",
        });
        const wrapper = shallowMount(
            ITableAnchor as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        expect(wrapper.find("a").exists()).toBeTruthy();
        expect(wrapper.find("td").text()).toBe("my awesome anchor");
    });

    it("should prevent default when Space is pressed on the anchor cell", () => {
        expect.assertions(1);
        const row: Row = { foo: undefined };
        const column = normalizeTableColumn<Row, keyof Row>({
            type: "anchor",
            header: "header",
            text: () => "my awesome anchor",
            href: "https://example.com",
        });
        const wrapper = mount(
            ITableAnchor as unknown as ComponentPublicInstance,
            {
                props: { column, row },
            },
        );

        const event = new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: " ",
            code: "Space",
        });

        wrapper.get("td").element.dispatchEvent(event);

        expect(event.defaultPrevented).toBe(true);
    });
});
