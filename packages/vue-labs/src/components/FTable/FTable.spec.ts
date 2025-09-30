import { mount } from "@vue/test-utils";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

describe("footer", () => {
    it("should add footer slot content to table footer", () => {
        const wrapper = mount(FTable, {
            props: {
                rows: [],
                columns: [],
            },
            slots: {
                footer: "Footer",
            },
        });
        const footer = wrapper.get("tfoot");
        expect(footer.text()).toBe("Footer");
    });

    it("should not render table footer if footer slot is not used", () => {
        const wrapper = mount(FTable, {
            props: {
                rows: [],
                columns: [],
            },
        });
        expect(wrapper.find("tfoot").exists()).toBeFalsy();
    });

    it("row should have correct rowindex", () => {
        const rows = [{ text: "Foo" }, { text: "Bar" }];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "Header",
                key: "text",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
            slots: {
                footer: "Footer",
            },
        });
        const footerRow = wrapper.get("tfoot tr");
        expect(footerRow.attributes("aria-rowindex")).toBe("4");
    });

    describe("cell", () => {
        const rows: never[] = [];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "A",
            },
            {
                type: "text",
                header: "B",
            },
            {
                type: "text",
                header: "C",
            },
        ]);

        it("should span all columns", () => {
            const wrapper = mount(FTable<(typeof rows)[number]>, {
                props: {
                    rows,
                    columns,
                },
                slots: {
                    footer: "Footer",
                },
            });
            const footerCell = wrapper.get("tfoot td");
            expect(footerCell.attributes("colspan")).toBe("3");
        });

        it("should span all columns when selectable", () => {
            const wrapper = mount(FTable<(typeof rows)[number]>, {
                props: {
                    rows,
                    columns,
                    selectable: "multi",
                },
                slots: {
                    footer: "Footer",
                },
            });
            const footerCell = wrapper.get("tfoot td");
            expect(footerCell.attributes("colspan")).toBe("4");
        });

        it("should span all columns when expandable", () => {
            const wrapper = mount(FTable<(typeof rows)[number]>, {
                props: {
                    rows,
                    columns,
                    expandableAttribute: "nested",
                },
                slots: {
                    footer: "Footer",
                },
            });
            const footerCell = wrapper.get("tfoot td");
            expect(footerCell.attributes("colspan")).toBe("4");
        });

        it("should span all columns when selectable and expandable", () => {
            const wrapper = mount(FTable<(typeof rows)[number]>, {
                props: {
                    rows,
                    columns,
                    expandableAttribute: "nested",
                    selectable: "multi",
                },
                slots: {
                    footer: "Footer",
                },
            });
            const footerCell = wrapper.get("tfoot td");
            expect(footerCell.attributes("colspan")).toBe("5");
        });
    });
});
describe("caption", () => {
    it("should not render if missing slot 'caption'", () => {
        const wrapper = mount(FTable, {
            attrs: {
                columns: [],
                rows: [],
            },
            slots: {},
        });
        expect(wrapper.find("[data-test='caption']").exists()).toBeFalsy();
    });

    it.todo("should not render if slot 'caption' is empty");

    it.todo("should render if slot 'caption' is present");

    it.todo(
        "should render with class 'sr-only' if slot 'caption' with class 'sr-only' is present",
    );
});
