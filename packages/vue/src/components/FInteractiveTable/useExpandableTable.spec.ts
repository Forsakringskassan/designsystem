import "html-validate/jest";
import { mount } from "@vue/test-utils";
import { FTableColumn } from "../FTableColumn";
import FInteractiveTable from "./FInteractiveTable.vue";

const UnexpandableComponent = {
    components: { FInteractiveTable, FTableColumn },
    template: /* HTML */ `
        <f-interactive-table :rows="rows" key-attribute="id">
            <template #default="{ row }">
                <f-table-column name="name" title="Name">
                    {{ row.name }}
                </f-table-column>
            </template>
        </f-interactive-table>
    `,
    data() {
        return {
            rows: [{ id: "1", name: "A" }],
        };
    },
};

const UnslottedComponent = {
    components: { FInteractiveTable, FTableColumn },
    template: /* HTML */ `
        <f-interactive-table
            :rows="rows"
            key-attribute="id"
            expandable-attribute="expandable"
        >
            <template #default="{ row }">
                <f-table-column name="name" title="Name">
                    {{ row.name }}
                </f-table-column>
                <f-table-column name="amount" title="Amount">
                    {{ row.amount }}
                </f-table-column>
            </template>
        </f-interactive-table>
    `,
    data() {
        return {
            rows: [
                {
                    id: "1",
                    name: "A",
                    amount: 1,
                    expandable: [{ id: "1a", name: "B", amount: 2 }],
                },
            ],
        };
    },
};

const SlottedComponent = {
    components: { FInteractiveTable, FTableColumn },
    template: /* HTML */ `
        <f-interactive-table
            :rows="rows"
            key-attribute="id"
            expandable-attribute="expandable"
        >
            <template #default="{ row }">
                <f-table-column name="name" title="Name">
                    {{ row.name }}
                </f-table-column>
                <f-table-column name="amount" title="Amount">
                    {{ row.amount }}
                </f-table-column>
            </template>
            <template #expandable="{ expandableRow, parentRow }">
                {{ expandableRow.name }}
            </template>
        </f-interactive-table>
    `,
    data() {
        return {
            rows: [
                {
                    id: "1",
                    name: "A",
                    amount: 1,
                    expandable: [{ id: "1a", name: "B", amount: 2 }],
                },
            ],
        };
    },
};

describe("useExpandableTable", () => {
    it("rows should have `aria-level` if `expandable-attribute` is set", async () => {
        expect.assertions(2);
        const wrapper = mount(UnslottedComponent);
        await wrapper.vm.$nextTick();
        const table = wrapper.getComponent(FInteractiveTable);
        const rows = table.findAll("tbody tr");

        expect(rows[0].attributes()["aria-level"]).toBe("1");
        expect(rows[1].attributes()["aria-level"]).toBe("2");
    });

    it("rows should not have `aria-level` if `expandable-attribute` is not set", async () => {
        expect.assertions(1);
        const wrapper = mount(UnexpandableComponent);
        await wrapper.vm.$nextTick();
        const table = wrapper.getComponent(FInteractiveTable);
        const rows = table.findAll("tbody tr");

        expect(rows[0].attributes()["aria-level"]).toBeUndefined();
    });

    it("should generate table cells with same columns if not using `expandable` slot", async () => {
        expect.assertions(3);
        const wrapper = mount(UnslottedComponent);
        await wrapper.vm.$nextTick();
        const table = wrapper.getComponent(FInteractiveTable);
        const expandedRow = table.findAll("tbody tr")[1];
        const expandableColumns = expandedRow.findAll("td");

        expect(expandableColumns).toHaveLength(3);
        expect(expandableColumns[1].text()).toContain("B");
        expect(expandableColumns[2].text()).toContain("2");
    });

    it("should generate table cell spanning all columns if using `expandable` slot", async () => {
        expect.assertions(3);
        const wrapper = mount(SlottedComponent);
        await wrapper.vm.$nextTick();
        const table = wrapper.getComponent(FInteractiveTable);
        const expandedRow = table.findAll("tbody tr")[1];
        const expandableColumns = expandedRow.findAll("td");

        expect(expandableColumns).toHaveLength(2);
        expect(expandableColumns[1].attributes()["colspan"]).toContain("2");
        expect(expandableColumns[1].text()).toContain("B");
    });

    it("should remove collapsed class from expandable content rows when click on expandable row", async () => {
        expect.assertions(2);
        const wrapper = mount(UnslottedComponent);
        await wrapper.vm.$nextTick();
        const table = wrapper.getComponent(FInteractiveTable);
        const rows = table.findAll("tbody tr");

        expect(rows[1].classes()).toContain("table__expandable-row--collapsed");

        // Need to trigger click on td-element to get relevant target.
        await rows[0].findAll("td")[0].trigger("click");

        expect(rows[1].classes()).not.toContain(
            "table__expandable-row--collapsed",
        );
    });

    it("should remove collapsed class from expandable content rows when pressing space on expandable row", async () => {
        expect.assertions(2);
        const wrapper = mount(UnslottedComponent);
        await wrapper.vm.$nextTick();
        const table = wrapper.getComponent(FInteractiveTable);
        const rows = table.findAll("tbody tr");

        expect(rows[1].classes()).toContain("table__expandable-row--collapsed");
        await rows[0].trigger("keydown", { key: " " });
        expect(rows[1].classes()).not.toContain(
            "table__expandable-row--collapsed",
        );
    });
});