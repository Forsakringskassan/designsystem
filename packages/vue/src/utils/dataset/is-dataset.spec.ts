import { isDataset } from "./is-dataset";
import { toDataset } from "./to-dataset";

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
