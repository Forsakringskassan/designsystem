import { assertSet } from "./assert-set";

it("should handle numbers", () => {
    expect.assertions(1);
    expect(() => {
        assertSet(42);
        assertSet(0);
        assertSet(-1);
        assertSet(Number.MIN_SAFE_INTEGER);
        assertSet(Number.MAX_SAFE_INTEGER);
        assertSet(NaN);
        assertSet(Infinity);
    }).not.toThrow();
});

it("should handle strings", () => {
    expect.assertions(1);
    expect(() => {
        assertSet("foo");
        assertSet("");
    }).not.toThrow();
});

it("should handle arrays", () => {
    expect.assertions(1);
    expect(() => {
        assertSet([]);
        assertSet([1, 2, 3]);
        assertSet(["foo"]);
    }).not.toThrow();
});

it("should handle objects", () => {
    expect.assertions(1);
    expect(() => {
        assertSet({});
        assertSet({ foo: "bar" });
        assertSet({ foo: null });
    }).not.toThrow();
});

it("should throw when value is null", () => {
    expect.assertions(1);
    expect(() => {
        assertSet(null);
    }).toThrow("Expected value to be set, but it was not");
});

it("should throw when value is undefined", () => {
    expect.assertions(1);
    expect(() => {
        assertSet(undefined);
    }).toThrow("Expected value to be set, but it was not");
});

it("should use custom error message when set", () => {
    expect.assertions(1);
    expect(() => {
        assertSet(undefined, "custom error message");
    }).toThrow("custom error message");
});

it("should function as a typescript assertion", () => {
    expect.assertions(1);

    function fn(_value: number): void {
        /* do nothing */
    }

    const value = 42 as number | null;

    expect(() => {
        assertSet(value);
        fn(value);
    }).not.toThrow();
});
