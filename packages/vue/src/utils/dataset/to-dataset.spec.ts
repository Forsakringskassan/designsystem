import { isDataset } from "./is-dataset";
import { toDataset } from "./to-dataset";

describe("toDataset", () => {
    it("should create a dataset from array", () => {
        expect.assertions(1);
        const dataset = [{ foo: "bar", baz: 42 }];
        const result = toDataset(dataset, undefined);
        expect(isDataset(result)).toBeTruthy();
    });

    it("should be idempotent", () => {
        expect.assertions(3);
        const dataset = [{ foo: "bar" }];
        const first = toDataset(dataset, undefined);
        const second = toDataset(first, undefined);
        expect(first).toBe(second);
        expect(isDataset(first)).toBeTruthy();
        expect(isDataset(second)).toBeTruthy();
    });

    it("should not add enumerable properties", () => {
        expect.assertions(3);
        const dataset = [{ foo: "bar", spam: "ham" }];
        const result = toDataset(dataset, undefined);
        expect(Object.keys(result)).toEqual(["0"]); // indices
        expect(Object.keys(result[0])).toEqual(["foo", "spam"]);
        expect(JSON.stringify(result)).toBe(JSON.stringify(dataset));
    });
});
