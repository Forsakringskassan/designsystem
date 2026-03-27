import { isAlphanumeric } from "./is-alphanumeric";

it.each`
    key        | expected
    ${"a"}     | ${true}
    ${"ö"}     | ${true}
    ${"A"}     | ${true}
    ${"Ö"}     | ${true}
    ${" "}     | ${true}
    ${"+"}     | ${true}
    ${"1"}     | ${true}
    ${"Alt"}   | ${false}
    ${"Enter"} | ${false}
`('should return $expected for key "$key"', ({ key, expected }) => {
    const e: KeyboardEvent = new KeyboardEvent("keydown", { key });
    expect(isAlphanumeric(e)).toBe(expected);
});

it("should return false when shift is pressed", () => {
    const e: KeyboardEvent = new KeyboardEvent("keydown", {
        key: "a",
        ctrlKey: true,
    });
    expect(isAlphanumeric(e)).toBe(false);
});

it("should return false when metakey is pressed", () => {
    const e: KeyboardEvent = new KeyboardEvent("keydown", {
        key: "a",
        metaKey: true,
    });
    expect(isAlphanumeric(e)).toBe(false);
});
