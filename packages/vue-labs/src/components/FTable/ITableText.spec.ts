import { flushPromises, mount } from "@vue/test-utils";
import ITableText from "./ITableText.vue";
import { normalizeTableColumn } from "./table-column";

jest.mock("./start-stop-edit", () => ({
    useStartStopEdit: () => ({
        stopEdit: jest.fn(),
    }),
}));

describe("ITableText", () => {
    it("should restore td tabstop on blur when exiting edit mode", async () => {
        const row = { text: "Foo" };
        const column = normalizeTableColumn<typeof row>({
            type: "text",
            header: "Text",
            key: "text",
            editable: true,
            label: () => "Text",
        });

        const wrapper = mount(ITableText, {
            attachTo: document.body,
            props: {
                row,
                column,
            } as never,
            global: {
                stubs: {
                    IPopupError: true,
                },
            },
        });

        const td = wrapper.get("td");
        const input = wrapper.get("input");

        expect(td.element.tabIndex).toBe(-1);
        expect(input.element.tabIndex).toBe(-1);

        await td.trigger("click");
        await flushPromises();

        expect(input.element.tabIndex).toBe(0);

        await input.trigger("blur");
        await flushPromises();

        expect(input.element.tabIndex).toBe(-1);
        expect(td.element.tabIndex).toBe(0);
    });
});
