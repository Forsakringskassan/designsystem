import { ref } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

describe("1.6 column size", () => {
    const rows: never[] = [];

    it("should have grow class if not set", () => {
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "A",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
        });
        const header = wrapper.get("thead th");
        expect(header.classes()).toContain("table-ng__column--grow");
    });

    it("should have grow class if set to null", () => {
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "A",
                size: ref(null),
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
        });
        const header = wrapper.get("thead th");
        expect(header.classes()).toContain("table-ng__column--grow");
    });

    it("should have grow class if set to grow", () => {
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "A",
                size: "grow",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
        });
        const header = wrapper.get("thead th");
        expect(header.classes()).toContain("table-ng__column--grow");
    });

    it("should have shrink class if set to shrink", () => {
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "A",
                size: "shrink",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
        });
        const header = wrapper.get("thead th");
        expect(header.classes()).toContain("table-ng__column--shrink");
    });
});

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

describe("7.1 Bulk checkbox in header when multiselect is enabled", () => {
    it("should render bulk checkbox in first column header for regular table", () => {
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
                selectable: "multi",
                rows,
                columns,
            },
            global: {
                stubs: ["i-table-header-selectable"],
            },
        });
        expect(
            wrapper.get("thead tr:first-child :first-child"),
        ).toMatchInlineSnapshot(
            `<i-table-header-selectable-stub selectable="multi" state="false"></i-table-header-selectable-stub>`,
        );
    });

    it("should render bulk checkbox in second column header for expandable table", () => {
        const rows = [{ text: "Foo", children: [{ text: "Bar" }] }];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "Header",
                key: "text",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                selectable: "multi",
                expandableAttribute: "children",
                rows,
                columns,
            },
            global: {
                stubs: ["i-table-header-selectable"],
            },
        });
        expect(
            wrapper.get("thead tr:first-child :nth-child(2)"),
        ).toMatchInlineSnapshot(
            `<i-table-header-selectable-stub selectable="multi" state="false"></i-table-header-selectable-stub>`,
        );
    });
});

describe("7.4 Bulk selection in expandable", () => {
    it("should render checkboxes only for top-level rows", async () => {
        const rows = [{ text: "Foo", children: [{ text: "Bar" }] }];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "Header",
                key: "text",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                selectable: "multi",
                expandableAttribute: "children",
                rows,
                columns,
            },
        });

        wrapper.get("button").trigger("click"); // expand row
        await flushPromises();

        expect(
            wrapper.find("tbody tr:nth-child(1) input").exists(),
        ).toBeTruthy();
        expect(
            wrapper.find("tbody tr:nth-child(2) input").exists(),
        ).toBeFalsy();
    });

    it("should place selection checkboxes in column 2 when expandable column exists", async () => {
        const rows = [{ text: "Foo", children: [{ text: "Bar" }] }];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "Header",
                key: "text",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                selectable: "multi",
                expandableAttribute: "children",
                rows,
                columns,
            },
            global: {
                stubs: ["i-table-selectable"],
            },
        });

        wrapper.get("button").trigger("click"); // expand row
        await flushPromises();

        expect(
            wrapper.get("tbody tr:nth-child(1) :nth-child(2)"),
        ).toMatchInlineSnapshot(
            `<i-table-selectable-stub selectable="multi" row="[object Object]" state="false" level="1"></i-table-selectable-stub>`,
        );
        expect(
            wrapper.get("tbody tr:nth-child(2) :nth-child(2)"),
        ).toMatchInlineSnapshot(
            `<i-table-selectable-stub selectable="multi" row="[object Object]" state="false" level="2"></i-table-selectable-stub>`,
        );
    });
});

describe("7.6 aria-selected", () => {
    it("should set aria-selected=true when row is selected via checkbox", async () => {
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
                columns,
                rows,
                selectable: "multi",
                keyAttribute: "text",
                selectedRows: [],
            },
        });

        expect(
            wrapper.get("tbody tr:first-child").attributes("aria-selected"),
        ).toBe("false");

        await wrapper.get("tbody tr:first-child input").setValue();

        expect(
            wrapper.get("tbody tr:first-child").attributes("aria-selected"),
        ).toBe("true");
    });

    it("should set aria-selected=true only for top-level rows expandable table", async () => {
        const rows = [
            { text: "1", children: [{ text: "2" }] },
            { text: "3", children: [{ text: "4" }] },
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
                columns,
                rows,
                selectable: "multi",
                keyAttribute: "text",
                expandableAttribute: "children",
                selectedRows: [],
            },
        });

        await wrapper.get("tbody tr:last-child button").trigger("click");
        await wrapper.get("tbody tr:first-child button").trigger("click");
        await wrapper.get("thead tr input").setValue();

        const trs = wrapper.findAll("tbody tr");
        expect(
            trs.map(
                (tr, index) =>
                    `Row ${index + 1} aria-selected: ${tr.attributes("aria-selected")}`,
            ),
        ).toMatchObject([
            "Row 1 aria-selected: true",
            "Row 2 aria-selected: false",
            "Row 3 aria-selected: true",
            "Row 4 aria-selected: false",
        ]);
    });
});
