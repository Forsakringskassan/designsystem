import { type Ref } from "vue";
import {
    type Dataset,
    getItemIdentifier,
    setItemIdentifiers,
    useDatasetRef,
} from "../../utils";
import { removeDatasetRows } from "./remove-dataset-rows";

describe("row removal", () => {
    interface Row {
        id: number;
        expandableRows?: Row[];
    }
    let dataset: Ref<Dataset<Row>>;

    beforeEach(() => {
        dataset = useDatasetRef(
            [
                { id: 1 },
                {
                    id: 2,
                    expandableRows: [{ id: 21 }, { id: 22 }],
                },
                { id: 3 },
            ],
            "expandableRows",
        );
    });

    it("should remove a row from the root level", () => {
        expect.assertions(2);
        const rowToRemove = dataset.value[1];
        removeDatasetRows(dataset, rowToRemove);

        expect(dataset.value).toHaveLength(2);
        expect(dataset.value.find((r) => r.id === 2)).toBeUndefined();
    });

    it("should remove a row from expandable rows", () => {
        expect.assertions(1);
        const rowToRemove = dataset.value[1].expandableRows![0];
        removeDatasetRows(dataset, rowToRemove);
        expect(dataset.value[1].expandableRows).toEqual([{ id: 22 }]);
    });

    it("should do nothing if the row is not found", () => {
        expect.assertions(1);
        const rowToRemove: Row = { id: 999 };
        removeDatasetRows(dataset, rowToRemove);
        expect(dataset.value).toEqual(dataset.value);
    });

    it("should do nothing if `expandableAttribute` is undefined and row is not found at root", () => {
        expect.assertions(1);
        const rowToRemove = dataset.value[1].expandableRows![0];
        removeDatasetRows(dataset, rowToRemove);
        expect(dataset.value).toEqual(dataset.value);
    });

    it("should preserve parent identifier for non-keyed expandable rows when removing a child row", () => {
        expect.assertions(2);

        setItemIdentifiers(dataset.value, undefined, "expandableRows");

        const originalParent = dataset.value[1];
        const originalIdentifier = getItemIdentifier(originalParent);

        const rowToRemove = originalParent.expandableRows![0];
        removeDatasetRows(dataset, rowToRemove);

        expect(getItemIdentifier(dataset.value[1])).toBe(originalIdentifier);
        expect(dataset.value[1].expandableRows).toEqual([{ id: 22 }]);
    });

    it("should remove array of rows", () => {
        expect.assertions(2);
        const rowsToRemove = [dataset.value[0], dataset.value[2]];
        removeDatasetRows(dataset, rowsToRemove);

        expect(dataset.value).toHaveLength(1);
        expect(dataset.value.find((r) => r.id === 2)).toBeDefined();
    });
});
