import { ref } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

const expandableAttribute = "nested";

describe("1.4 Rowheader", () => {
    it("should set rowheader", () => {
        const rows = [{ text: "Foo" }, { text: "Bar" }];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "rowheader",
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
        const rowheaders = wrapper.findAll("tbody th");
        expect(rowheaders[0].text()).toBe("Foo");
        expect(rowheaders[1].text()).toBe("Bar");
    });

    it("should set rowheader on expandable rows", async () => {
        const rows = [
            { text: "A", nested: [{ text: "A1" }, { text: "A2" }] },
            { text: "B", nested: [{ text: "B1" }, { text: "B2" }] },
        ];
        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "rowheader",
                header: "A",
                key: "text",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute,
            },
        });

        const expandButtons = wrapper.findAll("tbody button");
        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");

        const rowheaders = wrapper.findAll("tbody th");
        expect(rowheaders[0].text()).toBe("A");
        expect(rowheaders[1].text()).toBe("A1");
        expect(rowheaders[2].text()).toBe("A2");
        expect(rowheaders[3].text()).toBe("B");
        expect(rowheaders[4].text()).toBe("B1");
        expect(rowheaders[5].text()).toBe("B2");
    });
});

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

describe("1.8 when table is empty", () => {
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

    it("should have a single empty row with default text", () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
        });
        const bodyRows = wrapper.findAll("tbody tr");
        expect(bodyRows).toHaveLength(1);

        const emptyCell = wrapper.get("tbody td");
        expect(emptyCell.text()).toBe("Tabellen är tom");
    });

    it("should be able to change text of empty row", () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
            slots: { empty: "Foo" },
        });
        const emptyCell = wrapper.get("tbody td");
        expect(emptyCell.text()).toBe("Foo");
    });

    it("should span all columns", () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
            },
        });
        const emptyCell = wrapper.get("tbody td");
        expect(emptyCell.attributes("colspan")).toBe("3");
    });

    it("should span all columns when expandable", () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute,
            },
        });
        const emptyCell = wrapper.get("tbody td");
        expect(emptyCell.attributes("colspan")).toBe("4");
    });

    it("should span all columns when selectable", () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                selectable: "multi",
            },
        });
        const emptyCell = wrapper.get("tbody td");
        expect(emptyCell.attributes("colspan")).toBe("4");
    });

    it("should span all columns when selectable and expandable", () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute,
                selectable: "multi",
            },
        });
        const emptyCell = wrapper.get("tbody td");
        expect(emptyCell.attributes("colspan")).toBe("5");
    });

    it("should span one column when table has no columns", () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns: [],
            },
        });
        const emptyCell = wrapper.get("tbody td");
        expect(emptyCell.attributes("colspan")).toBe("1");
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
                expandableAttribute,
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
                expandableAttribute,
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

describe("6 Expandable table", () => {
    const rows = [
        { text: "A", nested: [{ text: "A1" }, { text: "A2" }] },
        { text: "B", nested: [{ text: "B1" }, { text: "B2" }] },
    ];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "text",
            header: "Header",
            key: "text",
        },
    ]);

    it("6.1 should expand row when clicking expand cell", async () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute,
            },
        });

        const withoutExpandedRows = wrapper.findAll("tbody tr");
        expect(withoutExpandedRows).toHaveLength(2);

        const expandButtons = wrapper.findAll("tbody button");
        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");
        const withExpandedRows = wrapper.findAll("tbody tr");
        expect(withExpandedRows).toHaveLength(6);

        const textCells = wrapper.findAll("tbody td:nth-child(2)");
        expect(textCells[0].text()).toBe("A");
        expect(textCells[1].text()).toBe("A1");
        expect(textCells[2].text()).toBe("A2");
        expect(textCells[3].text()).toBe("B");
        expect(textCells[4].text()).toBe("B1");
        expect(textCells[5].text()).toBe("B2");
    });

    it("6.3 should collapse expanded row when pressing click on expand button", async () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute,
            },
        });

        const expandButtons = wrapper.findAll("tbody button");
        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");
        const withExpandedRows = wrapper.findAll("tbody tr");
        expect(withExpandedRows).toHaveLength(6);

        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");
        const withoutExpandedRows = wrapper.findAll("tbody tr");
        expect(withoutExpandedRows).toHaveLength(2);

        const textCells = wrapper.findAll("tbody td:nth-child(2)");
        expect(textCells[0].text()).toBe("A");
        expect(textCells[1].text()).toBe("B");
    });

    it("6.4 should set correct aria-expanded on expandable rows", async () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute,
            },
        });

        const expandButtons = wrapper.findAll("tbody button");

        expect(expandButtons[0].attributes("aria-expanded")).toBe("false");
        expect(expandButtons[1].attributes("aria-expanded")).toBe("false");

        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");
        expect(expandButtons[0].attributes("aria-expanded")).toBe("true");
        expect(expandButtons[1].attributes("aria-expanded")).toBe("true");

        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");
        expect(expandButtons[0].attributes("aria-expanded")).toBe("false");
        expect(expandButtons[1].attributes("aria-expanded")).toBe("false");
    });

    it("6.4 should set correct aria-level on rows", async () => {
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns,
                expandableAttribute,
            },
        });

        const expandButtons = wrapper.findAll("tbody button");
        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");

        const bodyRows = wrapper.findAll("tbody tr");
        expect(bodyRows[0].attributes("aria-level")).toBe("1");
        expect(bodyRows[1].attributes("aria-level")).toBe("2");
        expect(bodyRows[2].attributes("aria-level")).toBe("2");
        expect(bodyRows[3].attributes("aria-level")).toBe("1");
        expect(bodyRows[4].attributes("aria-level")).toBe("2");
        expect(bodyRows[5].attributes("aria-level")).toBe("2");
    });

    it("should render custom expanded row with colspan spanning all columns", async () => {
        const customColumns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "text",
                header: "Header 1",
                key: "text",
            },
            {
                type: "text",
                header: "Header 2",
                key: "text",
            },
            {
                type: "text",
                header: "Header 3",
                key: "text",
            },
        ]);
        const wrapper = mount(FTable<(typeof rows)[number]>, {
            props: {
                rows,
                columns: customColumns,
                expandableAttribute,
            },
            slots: {
                expandable: "Lorem ipsum",
            },
        });

        const expandButtons = wrapper.findAll("tbody button");
        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");

        const customExpandedCell = wrapper.findAll(
            'tbody tr[aria-level="2"] td:nth-child(2)',
        );

        expect(customExpandedCell[0].attributes("colspan")).toBe("3");
        expect(customExpandedCell[1].attributes("colspan")).toBe("3");
        expect(customExpandedCell[2].attributes("colspan")).toBe("3");
        expect(customExpandedCell[3].attributes("colspan")).toBe("3");
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
                    expandableAttribute,
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
                    expandableAttribute,
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
