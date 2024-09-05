import { normalizeDateFormat } from "./normalize-date-format";

describe("normalizeDateFormat()", () => {
    it("should normalize YYYYMMDD to YYYY-MM-DD", () => {
        expect.assertions(1);
        expect(normalizeDateFormat("19991224")).toBe("1999-12-24");
    });

    it("should normalize YYYY/MM/DD to YYYY-MM-DD", () => {
        expect.assertions(1);
        expect(normalizeDateFormat("1999/12/24")).toBe("1999-12-24");
    });

    it("should passtru YYYY-MM-DD", () => {
        expect.assertions(1);
        expect(normalizeDateFormat("1999-12-24")).toBe("1999-12-24");
    });

    it("should return undefined if format is not recognized", () => {
        expect.assertions(1);
        expect(normalizeDateFormat("1999:12:24")).toBeUndefined();
    });
});
