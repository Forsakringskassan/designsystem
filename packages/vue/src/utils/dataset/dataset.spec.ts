import { toDataset } from "./to-dataset";

describe("Dataset", () => {
    it("should function as an array", () => {
        expect.assertions(2);
        const values = [{ v: 1 }, { v: 2 }, { v: 3 }];
        const dataset = toDataset(values, undefined);
        expect(dataset).toEqual(values);
        expect(dataset.map((x) => x.v * 2)).toEqual([2, 4, 6]);
    });
});
