import { useDatasetRef } from "@fkui/vue";
import { mount } from "@vue/test-utils";
import FTable from "./FTable.vue";
import { defineTableColumns } from "./table-column";

interface Row {
    text: string;
    match?: boolean;
    nested?: Array<{ text: string }>;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Header",
        key: "text",
    },
]);

const rows = useDatasetRef<Row>([
    { text: "Foo", match: true },
    { text: "Bar", match: false },
]);

const expandedRows = useDatasetRef<Row>(
    [
        { text: "A", nested: [{ text: "A1" }, { text: "A2" }] },
        { text: "B", nested: [{ text: "B1" }, { text: "B2" }] },
    ],
    "nested",
);

describe("custom row class", () => {
    it("should apply custom class to body rows", () => {
        expect.assertions(3);

        const wrapper = mount(FTable<Row>, {
            props: {
                rows: rows.value,
                columns,
                rowClass(row: Row) {
                    return row.match ? "row-match" : undefined;
                },
            },
        });

        const bodyRows = wrapper.findAll("tbody tr");
        expect(bodyRows).toHaveLength(2);
        expect(bodyRows[0].classes()).toContain("row-match");
        expect(bodyRows[1].classes()).not.toContain("row-match");
    });

    it("should apply custom class to expanded rows", async () => {
        expect.assertions(7);

        const expandableAttribute = "nested";
        const wrapper = mount(FTable<Row>, {
            props: {
                rows: expandedRows.value,
                columns,
                expandableAttribute,
                rowClass(row: Row) {
                    return row.text.endsWith("1") ? "row-match" : undefined;
                },
            },
        });

        const expandButtons = wrapper.findAll("tbody button");
        await expandButtons[0].trigger("click");
        await expandButtons[1].trigger("click");

        const bodyRows = wrapper.findAll("tbody tr");
        expect(bodyRows).toHaveLength(6);
        expect(bodyRows[1].classes()).toContain("row-match");
        expect(bodyRows[4].classes()).toContain("row-match");
        expect(bodyRows[0].classes()).not.toContain("row-match");
        expect(bodyRows[2].classes()).not.toContain("row-match");
        expect(bodyRows[3].classes()).not.toContain("row-match");
        expect(bodyRows[5].classes()).not.toContain("row-match");
    });

    it("should render rows without custom classes when rowClass is not set", () => {
        expect.assertions(2);

        const wrapper = mount(FTable<Row>, {
            props: {
                rows: useDatasetRef<Row>([{ text: "Foo" }]).value,
                columns,
            },
        });

        const bodyRows = wrapper.findAll("tbody tr");
        expect(bodyRows).toHaveLength(1);
        expect(bodyRows[0].classes()).toEqual(["table-ng__row"]);
    });

    it("should support array class return values", () => {
        expect.assertions(3);

        const wrapper = mount(FTable<Row>, {
            props: {
                rows: rows.value,
                columns,
                rowClass(row: Row) {
                    return row.match ? ["row-array", "row-extra"] : undefined;
                },
            },
        });

        const bodyRows = wrapper.findAll("tbody tr");
        expect(bodyRows[0].classes()).toContain("row-array");
        expect(bodyRows[0].classes()).toContain("row-extra");
        expect(bodyRows[1].classes()).not.toContain("row-array");
    });

    it("should support object class return values", () => {
        expect.assertions(4);

        const wrapper = mount(FTable<Row>, {
            props: {
                rows: rows.value,
                columns,
                rowClass(row: Row) {
                    return {
                        "row-object": Boolean(row.match),
                        "row-false": false,
                    };
                },
            },
        });

        const bodyRows = wrapper.findAll("tbody tr");
        expect(bodyRows[0].classes()).toContain("row-object");
        expect(bodyRows[1].classes()).not.toContain("row-object");
        expect(bodyRows[0].classes()).not.toContain("row-false");
        expect(bodyRows[1].classes()).not.toContain("row-false");
    });
});
