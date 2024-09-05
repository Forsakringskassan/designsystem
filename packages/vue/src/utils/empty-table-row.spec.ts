import { emptyTableRow } from "./empty-table-row";

it("should allow looking up property on object", () => {
    expect.assertions(3);
    const emptyObject = emptyTableRow("mock text");
    expect(String(emptyObject.foo)).toBe("mock text");
    expect(String(emptyObject.foo.bar)).toBe("mock text");
    expect(String(emptyObject.foo.bar.baz)).toBe("mock text");
});

it("should handle function calls", () => {
    expect.assertions(3);
    const emptyObject = emptyTableRow("mock text");
    expect(String(emptyObject.foo())).toBe("mock text");
    expect(String(emptyObject.foo.bar())).toBe("mock text");
    expect(String(emptyObject.foo.bar.baz())).toBe("mock text");
});
