import { expect, it } from "vitest";
import { TableScroll, tableScrollClasses } from "./table-scroll";

it("should generate no classes for NONE", () => {
    expect.assertions(1);
    expect(tableScrollClasses(TableScroll.NONE)).toEqual([]);
});

it("should generate classes for HORIZONTAL", () => {
    expect.assertions(1);
    expect(tableScrollClasses(TableScroll.HORIZONTAL)).toEqual([
        "table__scroll",
        "table__scroll--horizontal",
    ]);
});
