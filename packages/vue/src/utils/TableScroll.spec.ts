import { TableScroll, tableScrollClasses } from "./TableScroll";

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

it("should generate classes for VERTICAL", () => {
    expect.assertions(1);
    expect(tableScrollClasses(TableScroll.VERTICAL)).toEqual([
        "table__scroll",
        "table__scroll--vertical",
    ]);
});

it("should generate classes for BOTH", () => {
    expect.assertions(1);
    expect(tableScrollClasses(TableScroll.BOTH)).toEqual([
        "table__scroll",
        "table__scroll--horizontal",
        "table__scroll--vertical",
    ]);
});
