import { isDataset, toDataset, useDatasetRef } from "./dataset";

describe("Dataset", () => {
    it("should function as an array", () => {
        expect.assertions(2);
        const values = [1, 2, 3];
        const dataset = toDataset(values);
        expect(dataset).toEqual([1, 2, 3]);
        expect(dataset.map((x) => x * 2)).toEqual([2, 4, 6]);
    });
});

describe("isDataset()", () => {
    it("should return true for dataset", () => {
        expect.assertions(1);
        const dataset = toDataset([{ foo: "bar" }]);
        expect(isDataset(dataset)).toBeTruthy();
    });

    it("should return false for regular array", () => {
        expect.assertions(1);
        const dataset = [{ foo: "bar" }];
        expect(isDataset(dataset)).toBeFalsy();
    });

    it("should return false for undefined and null", () => {
        expect.assertions(2);
        expect(isDataset(null)).toBeFalsy();
        expect(isDataset(undefined)).toBeFalsy();
    });
});

describe("toDataset", () => {
    it("should create a dataset from array", () => {
        expect.assertions(1);
        const dataset = [{ foo: "bar", baz: 42 }];
        const result = toDataset(dataset);
        expect(isDataset(result)).toBeTruthy();
    });

    it("should be idempotent", () => {
        expect.assertions(3);
        const dataset = [{ foo: "bar" }];
        const first = toDataset(dataset);
        const second = toDataset(first);
        expect(first).toBe(second);
        expect(isDataset(first)).toBeTruthy();
        expect(isDataset(second)).toBeTruthy();
    });

    it("should not add enumerable properties", () => {
        expect.assertions(3);
        const dataset = [{ foo: "bar", spam: "ham" }];
        const result = toDataset(dataset);
        expect(Object.keys(result)).toEqual(["0"]); // indices
        expect(Object.keys(result[0])).toEqual(["foo", "spam"]);
        expect(JSON.stringify(result)).toBe(JSON.stringify(dataset));
    });
});

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
