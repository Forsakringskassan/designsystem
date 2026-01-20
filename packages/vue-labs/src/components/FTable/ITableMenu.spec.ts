import { mount, shallowMount } from "@vue/test-utils";
import ITableMenu from "./ITableMenu.vue";
import { normalizeTableColumn } from "./table-column";

describe("ITableMenu", () => {
    it("should render button when cell is enabled", () => {
        expect.assertions(1);
        const row = {};
        const column = normalizeTableColumn<typeof row>({
            type: "menu",
            header: "Actions",
            enabled: true,
            text: () => "Actions",
        });
        const wrapper = shallowMount(ITableMenu<typeof row>, {
            props: { column, row },
        });
        expect(wrapper.find("button").exists()).toBeTruthy();
    });

    it("should render empty cell when disabled", () => {
        expect.assertions(1);
        const row = {};
        const column = normalizeTableColumn<typeof row>({
            type: "menu",
            header: "Actions",
            enabled: false,
            text: () => "Actions",
        });
        const wrapper = shallowMount(ITableMenu<typeof row>, {
            props: { column, row },
        });
        expect(wrapper.find("button").exists()).toBeFalsy();
    });

    it("should render button text", () => {
        expect.assertions(1);
        const row = { text: "Kalle Anka" };
        const column = normalizeTableColumn<typeof row>({
            type: "menu",
            header: "Actions",
            text(row) {
                return `Actions for "${row.text}"`;
            },
        });
        const wrapper = mount(ITableMenu<typeof row>, {
            props: { column, row },
        });
        const button = wrapper.get("button");
        expect(button.text()).toBe(`Actions for "Kalle Anka"`);
    });

    it("should render context menu with correct items", () => {
        expect.assertions(4);
        const row = {};
        const column = normalizeTableColumn<typeof row>({
            type: "menu",
            header: "Actions",
            text: () => "Actions",
            actions: [
                { label: "Foo", icon: "foo" },
                { label: "Bar", icon: "bar" },
                { label: "Baz" },
            ],
        });
        const wrapper = mount(ITableMenu<typeof row>, {
            props: { column, row },
        });
        const contextMenu = wrapper.getComponent({ name: "FContextMenu" });
        const items = contextMenu.props("items");
        expect(items).toHaveLength(3);
        expect(items[0]).toMatchObject({
            label: "Foo",
            icon: "foo",
            key: "item-1",
        });
        expect(items[1]).toMatchObject({
            label: "Bar",
            icon: "bar",
            key: "item-2",
        });
        expect(items[2]).toMatchObject({
            label: "Baz",
            icon: undefined,
            key: "item-3",
        });
    });

    it("should be closed by default", () => {
        expect.assertions(1);
        const row = {};
        const column = normalizeTableColumn({
            type: "menu",
            header: "Actions",
            text: () => "Actions",
        });
        const wrapper = mount(ITableMenu, {
            props: { column, row } as never,
        });
        const contextMenu = wrapper.getComponent({ name: "FContextMenu" });
        expect(contextMenu.props("isOpen")).toBeFalsy();
    });

    it("should open context menu when button is clicked", async () => {
        expect.assertions(1);
        const row = {};
        const column = normalizeTableColumn({
            type: "menu",
            header: "Actions",
            text: () => "Actions",
        });
        const wrapper = mount(ITableMenu, {
            props: { column, row } as never,
        });
        const button = wrapper.get("button");
        await button.trigger("click");
        const contextMenu = wrapper.getComponent({ name: "FContextMenu" });
        expect(contextMenu.props("isOpen")).toBeTruthy();
    });
});
