import { mount } from "@vue/test-utils";
import { FTable } from "../components";
import { defineTableColumns } from "../components/FTable/table-column";
import { useDatasetRef } from "../utils";
import { FTableSelectors } from "./FTable.selectors";

const rows = [{ name: "Alice" }, { name: "Bob" }];
const columns = defineTableColumns<(typeof rows)[number], "name">([
    { key: "name", header: "Name" },
]);

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTable<(typeof rows)[number]>, {
        props: { rows: useDatasetRef(rows).value, columns },
    });
    const { selector } = FTableSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".table-ng");
    expect(root.classes()).toContain("table-ng");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTable<(typeof rows)[number]>, {
        props: { rows: useDatasetRef(rows).value, columns },
        attrs: { "data-test": "my-table" },
    });
    const { selector } = FTableSelectors('[data-test="my-table"]');
    expect(selector).toBe('[data-test="my-table"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("rows() should return all body rows", () => {
    expect.assertions(1);
    const wrapper = mount(FTable<(typeof rows)[number]>, {
        props: { rows: useDatasetRef(rows).value, columns },
    });
    const { rows: rowsSelector } = FTableSelectors();
    expect(wrapper.findAll(rowsSelector())).toHaveLength(2);
});

it("emptyRow() should not exist when there are rows", () => {
    expect.assertions(1);
    const wrapper = mount(FTable<(typeof rows)[number]>, {
        props: { rows: useDatasetRef(rows).value, columns },
    });
    const { emptyRow } = FTableSelectors();
    expect(wrapper.find(emptyRow()).exists()).toBeFalsy();
});

it("header() should return the header cell for the given column", () => {
    expect.assertions(1);
    const wrapper = mount(FTable<(typeof rows)[number]>, {
        props: { rows: useDatasetRef(rows).value, columns },
    });
    const { header } = FTableSelectors();
    expect(wrapper.get(header(1)).text()).toBe("Name");
});

it("cell() should return the cell for the given row and column", () => {
    expect.assertions(2);
    const wrapper = mount(FTable<(typeof rows)[number]>, {
        props: { rows: useDatasetRef(rows).value, columns },
    });
    const { cell } = FTableSelectors();
    expect(wrapper.get(cell({ row: 1, col: 1 })).text()).toBe("Alice");
    expect(wrapper.get(cell({ row: 2, col: 1 })).text()).toBe("Bob");
});
