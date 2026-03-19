import { assertRef } from "./assert-ref";

it("should pass when ref has a value set", () => {
    expect.assertions(1);
    expect(() => {
        assertRef({ value: 42 });
        assertRef({ value: 0 });
        assertRef({ value: "foo" });
        assertRef({ value: "" });
        assertRef({ value: {} });
    }).not.toThrow();
});

it("should throw when ref is unset", () => {
    expect.assertions(2);
    expect(() => {
        assertRef(null);
    }).toThrow("Expected ref to have a non-null value, but it did not");
    expect(() => {
        assertRef(undefined);
    }).toThrow("Expected ref to have a non-null value, but it did not");
});

it("should throw when ref holds an unset value", () => {
    expect.assertions(2);
    expect(() => {
        assertRef({ value: null });
    }).toThrow("Expected ref to have a non-null value, but it did not");
    expect(() => {
        assertRef({ value: undefined });
    }).toThrow("Expected ref to have a non-null value, but it did not");
});

it("should use custom error message when set", () => {
    expect.assertions(1);
    expect(() => {
        assertRef({ value: null }, "custom error message");
    }).toThrow("custom error message");
});

it("should function as a typescript assertion", () => {
    expect.assertions(1);

    function fn(_ref: { value: number }): void {
        /* do nothing */
    }

    const ref = { value: 42 } as { value: number | null };

    expect(() => {
        assertRef(ref);
        fn(ref);
    }).not.toThrow();
});
