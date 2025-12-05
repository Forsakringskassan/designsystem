import { mount } from "@vue/test-utils";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

describe("1.12 aria-rowcount", () => {
    it("should include body rows and header", () => {
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
        });
        const table = wrapper.get("table");
        expect(table.attributes("aria-rowcount")).toBe("3");
    });

    it("should include footer", () => {
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
        const table = wrapper.get("table");
        expect(table.attributes("aria-rowcount")).toBe("4");
    });

    it("should include expandable rows", () => {
        const rows = [
            { text: "Foo", nested: [{ text: "Foo1" }, { text: "Foo2" }] },
            { text: "Bar" },
        ];
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
                expandableAttribute: "nested",
            },
        });
        const table = wrapper.get("table");
        expect(table.attributes("aria-rowcount")).toBe("5");
    });
});

describe("1.12 aria-rowindex", () => {
    it("should be correct on header row", () => {
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
        });
        const headerRow = wrapper.get("table thead tr");
        expect(headerRow.attributes("aria-rowindex")).toBe("1");
    });

    it("should be correct on body rows", () => {
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
        });
        const bodyRows = wrapper.findAll("table tbody tr");
        expect(bodyRows[0].attributes("aria-rowindex")).toBe("2");
        expect(bodyRows[1].attributes("aria-rowindex")).toBe("3");
    });

    it("should be correct on expanded rows", async () => {
        const rows = [
            { text: "Foo", nested: [{ text: "Foo1" }, { text: "Foo2" }] },
            { text: "Bar" },
        ];
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
                expandableAttribute: "nested",
            },
        });

        const withoutExpandedRows = wrapper.findAll("table tbody tr");
        expect(withoutExpandedRows[0].attributes("aria-rowindex")).toBe("2");
        expect(withoutExpandedRows[1].attributes("aria-rowindex")).toBe("5");

        const expandButton = wrapper.get("table tbody button");
        await expandButton.trigger("click");
        const withExpandedRows = wrapper.findAll("table tbody tr");
        expect(withExpandedRows[0].attributes("aria-rowindex")).toBe("2");
        expect(withExpandedRows[1].attributes("aria-rowindex")).toBe("3");
        expect(withExpandedRows[2].attributes("aria-rowindex")).toBe("4");
        expect(withExpandedRows[3].attributes("aria-rowindex")).toBe("5");
    });

    it("should be correct on footer", () => {
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
});

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
