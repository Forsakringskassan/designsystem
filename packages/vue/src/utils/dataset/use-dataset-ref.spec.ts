import { isDataset } from "./is-dataset";
import { useDatasetRef } from "./use-dataset-ref";

describe("useDatasetRef()", () => {
    it("should create a ref with dataset", () => {
        expect.assertions(2);
        const initial = [{ foo: "bar" }];
        const dataset = useDatasetRef(initial);
        expect(isDataset(dataset.value)).toBeTruthy();
        expect(dataset.value).toEqual(initial);
    });

    it("should create an empty dataset if no initial value is provided", () => {
        expect.assertions(2);
        const dataset = useDatasetRef();
        expect(isDataset(dataset.value)).toBeTruthy();
        expect(dataset.value).toEqual([]);
    });
});
