import { FDate } from "@fkui/date";
import { resolveCentury } from "./resolve-century";

const now = FDate.fromYearMonthDay(2023, 11, 22);

describe("year before current year", () => {
    it("should return current century when no plus", () => {
        expect(resolveCentury("22", "01", "01", false, now)).toBe("20");
    });

    it("should decrease one century when plus", () => {
        expect(resolveCentury("22", "01", "01", true, now)).toBe("19");
    });
});

describe("year after current year", () => {
    it("should decrease one century when no plus", () => {
        expect(resolveCentury("24", "01", "01", false, now)).toBe("19");
    });

    it("should decrease two centuries when plus", () => {
        expect(resolveCentury("24", "01", "01", true, now)).toBe("18");
    });
});

describe("date is yesterday", () => {
    it("should return current century when no plus", () => {
        expect(resolveCentury("23", "11", "21", false, now)).toBe("20");
    });

    it("should decrease one century when plus", () => {
        expect(resolveCentury("23", "11", "21", true, now)).toBe("19");
    });
});

describe("date is today", () => {
    it("should return current century when no plus", () => {
        expect(resolveCentury("23", "11", "22", false, now)).toBe("20");
    });

    it("should decrease one century when plus", () => {
        expect(resolveCentury("23", "11", "22", true, now)).toBe("19");
    });
});

describe("date is tomorrow", () => {
    it("should decrease one century when no plus", () => {
        expect(resolveCentury("23", "11", "23", false, now)).toBe("19");
    });

    it("should decrease one century when plus", () => {
        expect(resolveCentury("23", "11", "23", false, now)).toBe("19");
    });

    it("should decrease one century when samordningsnummer, no plus", () => {
        expect(resolveCentury("23", "11", "83", false, now)).toBe("19");
    });
});

describe("date is end of previous month", () => {
    it("should decrease one century when no plus", () => {
        expect(resolveCentury("23", "10", "31", false, now)).toBe("20");
    });
});

describe("date is start of next month", () => {
    it("should decrease one century when no plus", () => {
        expect(resolveCentury("23", "12", "01", false, now)).toBe("19");
    });
});
