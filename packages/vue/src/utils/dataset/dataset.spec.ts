import { toDataset } from "./to-dataset";

describe("Dataset", () => {
    it("should function as an array", () => {
        expect.assertions(2);
        const values = [1, 2, 3];
        const dataset = toDataset(values);
        expect(dataset).toEqual([1, 2, 3]);
        expect(dataset.map((x) => x * 2)).toEqual([2, 4, 6]);
    });
});
